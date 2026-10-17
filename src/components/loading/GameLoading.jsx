import { useEffect, useState } from "react";
import { loadingTips } from "../../content/loadingTips";

// Un suggerimento a caso per ogni visita, poi scorrono in ordine
const START_TIP = Math.floor(Math.random() * loadingTips.length);
const TIP_MS = 4000;

const GLOW =
  "radial-gradient(ellipse 80% 60% at 15% 100%, color-mix(in srgb, var(--accent) 35%, transparent), transparent 70%), " +
  "radial-gradient(ellipse 60% 50% at 90% 0%, color-mix(in srgb, var(--hi) 20%, transparent), transparent 70%)";

export default function GameLoading() {
  const [tip, setTip] = useState(START_TIP);

  useEffect(() => {
    const interval = setInterval(
      () => setTip((current) => (current + 1) % loadingTips.length),
      TIP_MS,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg">
      <span role="status" className="sr-only">
        Caricamento
      </span>

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{ background: GLOW }}
      />

      <div
        aria-hidden="true"
        className="absolute bottom-28 -left-4 skew-x-[-14deg] bg-accent py-2 pr-10 pl-12 md:bottom-32 md:pr-16 md:pl-20"
      >
        <span className="block skew-x-[14deg] text-4xl font-black text-on-accent uppercase italic md:text-7xl">
          Caricamento
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-4 bg-[#0b0014] px-5 pt-4 pb-[calc(16px+env(safe-area-inset-bottom))] md:px-10 md:py-5">
        <p
          key={tip}
          className="min-w-0 flex-1 animate-panel-in text-sm text-muted motion-reduce:animate-none md:text-base"
        >
          <span className="font-bold text-hi">Suggerimento:</span>{" "}
          {loadingTips[tip]}
        </p>
        <span
          aria-hidden="true"
          className="size-6 shrink-0 animate-spin rounded-full border-[3px] border-hi border-t-transparent motion-reduce:animate-none md:size-7"
        />
      </div>
    </div>
  );
}
