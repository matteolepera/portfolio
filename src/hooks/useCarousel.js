import { useRef, useState } from "react";

const SWIPE_THRESHOLD = 40;

// Logica comune ai caroselli: foto attuale, avanti e indietro, tastiera e swipe
export default function useCarousel(count) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  const next = () => {
    if (count > 0) setIndex((current) => (current + 1) % count);
  };

  const prev = () => {
    if (count > 0) setIndex((current) => (current - 1 + count) % count);
  };

  const goTo = (target) => {
    if (count > 0) setIndex(((target % count) + count) % count);
  };

  const bind = {
    onKeyDown: (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
      }
    },
    onTouchStart: (event) => {
      touchStartX.current = event.touches[0].clientX;
    },
    onTouchEnd: (event) => {
      if (touchStartX.current === null) return;
      const delta = event.changedTouches[0].clientX - touchStartX.current;
      touchStartX.current = null;
      if (Math.abs(delta) < SWIPE_THRESHOLD) return;
      if (delta < 0) next();
      else prev();
    },
  };

  return { index, count, next, prev, goTo, bind };
}
