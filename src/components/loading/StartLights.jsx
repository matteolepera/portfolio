import { useEffect, useState } from "react";

const PODS = [0, 1, 2, 3, 4];
const STEP_MS = 450;

export default function StartLights() {
  const [reduceMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [lit, setLit] = useState(0);

  // Da 1 a 5 si accendono le luci, a 6 si spengono tutte: "lights out", poi si ricomincia
  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(
      () => setLit((current) => (current >= 6 ? 0 : current + 1)),
      STEP_MS,
    );
    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <div role="status" className="flex flex-col items-center gap-5">
      <div aria-hidden="true" className="flex gap-2 md:gap-3">
        {PODS.map((pod) => {
          const on = reduceMotion || (pod < lit && lit <= 5);

          return (
            <div
              key={pod}
              className="flex flex-col gap-1.5 rounded-lg bg-[#141414] p-1.5 md:gap-2 md:p-2"
            >
              {[0, 1].map((row) => (
                <span
                  key={row}
                  className={`size-6 rounded-full transition-colors duration-150 md:size-8 ${
                    on
                      ? "bg-[#d40000] shadow-[0_0_14px_rgba(212,0,0,0.6)]"
                      : "bg-[#2e2c2a]"
                  }`}
                />
              ))}
            </div>
          );
        })}
      </div>
      <p className="text-[11px] font-semibold tracking-[0.08em] text-muted uppercase [font-stretch:75%]">
        Partenza in corso
      </p>
    </div>
  );
}
