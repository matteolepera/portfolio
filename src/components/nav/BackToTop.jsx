import { IconArrowUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { scrollToSection } from "../../utils/scrollToSection";

export default function BackToTop() {
    const [shown, setShown] = useState(false);

    useEffect(() => {
        let frame = 0;

        const update = () => {
            frame = 0;
            const total = document.documentElement.scrollHeight - window.innerHeight;
            const progress = total > 0 ? window.scrollY / total : 0;
            setShown(progress > 0.5);
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
    }, []);

    return (
        <a
            href="#top"
            inert={!shown}
            onClick={(event) => scrollToSection(event, "top")}
            aria-label="Torna all'inizio"
            className={`fixed right-3 bottom-[calc(92px+env(safe-area-inset-bottom))] lg:right-6 lg:bottom-6 z-20 flex size-12 items-center justify-center rounded-full border border-line bg-glass text-ink shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-[16px] transition-[opacity,transform] ${shown
                ? "translate-y-0 scale-100 opacity-100 duration-[450ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                : "pointer-events-none translate-y-3 scale-90 opacity-0 duration-200 ease-out"
                }`}
        >
            <IconArrowUp size={22} stroke={2.2} aria-hidden="true" />
        </a>
    );
}
