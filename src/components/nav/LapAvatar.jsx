import { useRef } from "react";
import useScrollProgress from "../../hooks/useScrollProgress";
import Avatar from "../brand/Avatar";

const RADIUS = 23;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function LapAvatar({ shown }) {
  const ringRef = useRef(null);
  useScrollProgress(ringRef, CIRCUMFERENCE);

  return (
    <a
      href="#top"
      aria-label="Matteo Le Pera: torna all'inizio"
      className={`relative flex size-[50px] shrink-0 items-center justify-center transition-transform ${
        shown
          ? "scale-100 delay-150 duration-[550ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          : "scale-60 duration-[250ms]"
      }`}
    >
      <svg
        viewBox="0 0 50 50"
        aria-hidden="true"
        className="absolute inset-0 size-full -rotate-90"
      >
        <circle
          cx="25"
          cy="25"
          r={RADIUS}
          fill="none"
          strokeWidth="2.5"
          className="stroke-line"
        />
        <circle
          ref={ringRef}
          cx="25"
          cy="25"
          r={RADIUS}
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
          className="stroke-accent transition-[stroke] duration-500"
        />
      </svg>
      <Avatar className="size-10" ring="border-0" />
      <span
        aria-hidden="true"
        className="absolute right-0.5 bottom-[3px] size-2.5 rounded-full bg-hi shadow-[0_0_0_2.5px_var(--bg)]"
      />
    </a>
  );
}
