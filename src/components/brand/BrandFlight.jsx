import { useEffect, useRef } from "react";
import Identity from "./Identity";
import { scrollToSection } from "../../utils/scrollToSection";

const END_SCALE = 46 / 72;
const DURATION = 650;

export default function BrandFlight({ docked, slotRef }) {
  const flyRef = useRef(null);
  const animUntil = useRef(0);
  const firstRun = useRef(true);

  useEffect(() => {
    const fly = flyRef.current;
    const slot = slotRef.current;
    if (!fly || !slot) return;

    const place = (animate) => {
      const hero = document.querySelector("[data-hero-identity]");
      if (!hero) {
        fly.style.visibility = "hidden";
        return;
      }

      slot.style.width = `${hero.offsetWidth * END_SCALE}px`;

      const target = docked
        ? slot.getBoundingClientRect()
        : hero.getBoundingClientRect();
      const scale = docked ? END_SCALE : 1;
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
  }, [docked, slotRef]);

  return (
    <a
      ref={flyRef}
      href="#top"
      onClick={(event) => scrollToSection(event, "progetti")}
      aria-label="Matteo Le Pera, torna all'inizio"
      style={{ visibility: "hidden" }}
      className="pointer-events-auto fixed top-0 left-0 z-[25] flex origin-top-left items-center gap-4 whitespace-nowrap text-ink will-change-transform"
    >
      <Identity />
    </a>
  );
}
