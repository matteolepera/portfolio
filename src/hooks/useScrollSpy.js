import { useEffect, useState } from "react";

// Dice in quale sezione sei e se hai iniziato a scorrere la pagina
export default function useScrollSpy(
  ids,
  { offset = 112, dockAt = 24, undockAt = 8 } = {},
) {
  const [state, setState] = useState({ activeId: "", docked: false });

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollY = window.scrollY;

      let activeId = "";
      for (const id of ids) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= offset)
          activeId = id;
      }

      const atBottom =
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 4;
      if (activeId && atBottom) activeId = ids[ids.length - 1];

      setState((prev) => {
        let docked = prev.docked;
        if (!docked && scrollY > dockAt) docked = true;
        else if (docked && scrollY < undockAt) docked = false;
        if (prev.activeId === activeId && prev.docked === docked) return prev;
        return { activeId, docked };
      });
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
  }, [ids, offset, dockAt, undockAt]);

  return state;
}
