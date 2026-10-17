import { useEffect, useState } from "react";
import { loadingTips } from "../../content/loadingTips";

// Un suggerimento a caso per ogni visita, poi scorrono in ordine
const START_TIP = Math.floor(Math.random() * loadingTips.length);
const TIP_MS = 4000;

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
    <div className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-line bg-surface md:aspect-[16/8]">
      <span role="status" className="sr-only">
        Caricamento
      </span>

      <div
        aria-hidden="true"
        className="absolute bottom-16 -left-3 skew-x-[-14deg] bg-accent py-1 pr-6 pl-8 md:bottom-20"
      >
        <span className="block skew-x-[14deg] text-xl font-black text-on-accent uppercase italic md:text-3xl">
          Caricamento
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-[#0b0014] px-4 py-3">
        <p
          key={tip}
          className="min-w-0 flex-1 animate-panel-in text-xs text-muted motion-reduce:animate-none md:text-sm"
        >
          <span className="font-bold text-hi">Suggerimento:</span>{" "}
          {loadingTips[tip]}
        </p>
        <span
          aria-hidden="true"
          className="size-4 shrink-0 animate-spin rounded-full border-2 border-hi border-t-transparent motion-reduce:animate-none"
        />
      </div>
    </div>
  );
}
