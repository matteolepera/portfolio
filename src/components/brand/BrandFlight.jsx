import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import useSectionNavigation from "../../hooks/useSectionNavigation";
import Identity from "./Identity";

const END_SCALE = 46 / 72;
const DURATION = 650;

export default function BrandFlight({ docked, slotRef }) {
  const flyRef = useRef(null);
  const animUntil = useRef(0);
  const firstRun = useRef(true);
  const { pathname } = useLocation();
  const goToSection = useSectionNavigation();

  useEffect(() => {
    const fly = flyRef.current;
    const slot = slotRef.current;
    if (!fly || !slot) return;

    const place = (animate) => {
      // Fuori dalla home non c'è l'hero: foto e nome restano nell'header
      const hero = document.querySelector("[data-hero-identity]");
      const isDocked = docked || !hero;

      slot.style.width = `${(hero ?? fly).offsetWidth * END_SCALE}px`;

      const target = isDocked
        ? slot.getBoundingClientRect()
        : hero.getBoundingClientRect();
      const scale = isDocked ? END_SCALE : 1;
      const moving = animate || performance.now() < animUntil.current;
      if (animate) animUntil.current = performance.now() + DURATION;

      fly.style.transition = moving
        ? `transform ${DURATION}ms cubic-bezier(0.22, 1, 0.36, 1)`
        : "none";
      fly.style.transform = `translate3d(${target.left}px, ${target.top}px, 0) scale(${scale})`;
      fly.style.visibility = "visible";
    };

    place(!firstRun.current);
    firstRun.current = false;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!docked) place(false);
      });
    };
    const onResize = () => place(false);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    document.fonts?.ready.then(() => place(false));

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [docked, slotRef, pathname]);

  return (
    <a
      ref={flyRef}
      href="/#top"
      onClick={(event) => goToSection(event, "top")}
      aria-label="Matteo Le Pera, torna all'inizio"
      style={{ visibility: "hidden" }}
      className="pointer-events-auto fixed top-0 left-0 z-[25] flex origin-top-left items-center gap-4 whitespace-nowrap text-ink will-change-transform"
    >
      <Identity />
    </a>
  );
}
