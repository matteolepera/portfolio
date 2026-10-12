import { useEffect } from "react";

// Riempie un cerchio SVG in base a quanto hai scorso la pagina
export default function useScrollProgress(ref, length) {
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const circle = ref.current;
      if (!circle) return;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
      circle.style.strokeDashoffset = String(length * (1 - progress));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, length]);
}
