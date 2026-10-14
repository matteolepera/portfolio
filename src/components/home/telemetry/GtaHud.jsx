import { IconBrandGithub, IconStarFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { profile, telemetry } from "../../../content/profile";
import useCountdown from "../../../hooks/useCountdown";
import useGitHubActivity from "../../../hooks/useGitHubActivity";
import Radar from "./Radar";

const LABEL =
  "text-[10px] font-semibold tracking-[0.08em] uppercase [font-stretch:75%]";

function pad(value) {
  return String(value).padStart(2, "0");
}

function getCountdownParts(remaining) {
  if (!remaining) {
    return [
      { value: "--", unit: "g" },
      { value: "--", unit: "h" },
      { value: "--", unit: "m" },
    ];
  }

  return [
    { value: remaining.days, unit: "g" },
    { value: pad(remaining.hours), unit: "h" },
    { value: pad(remaining.minutes), unit: "m" },
  ];
}

export default function GtaHud() {
  const activity = useGitHubActivity(profile.githubUser);
  const remaining = useCountdown(telemetry.viRelease);
  const [weapon, setWeapon] = useState(0);

  // L'arma selezionata cambia da sola, come quando scorri la ruota delle armi
  useEffect(() => {
    const interval = setInterval(
      () => setWeapon((current) => (current + 1) % telemetry.arsenal.length),
      2600,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <aside
      aria-label="Telemetria"
      className="@container relative h-[320px] min-w-0 flex-[1_1_340px] overflow-hidden rounded-2xl border border-line bg-bg"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[120px] bg-surface"
      />

      {/* In alto a sinistra: notifica del telefono e zona */}
      <div className="absolute top-3 left-3 w-[min(210px,55cqw)]">
        <div className="flex items-start gap-2 rounded-lg bg-[#0b0014] px-2.5 py-2">
          <span className="flex size-[22px] shrink-0 items-center justify-center rounded-md bg-ink text-[#0b0014]">
            <IconBrandGithub size={14} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className={`${LABEL} text-muted`}>Messaggio · GitHub</p>
            <p className="truncate text-xs">Ultimo push {activity.lastPush}</p>
          </div>
        </div>

        <div className="mt-3 pl-0.5">
          <p className="flex items-center gap-1.5">
            <span aria-hidden="true" className="size-2 rotate-45 bg-accent" />
            <span className={`${LABEL} text-muted`}>{telemetry.workMode}</span>
          </p>
          <p className="mt-[3px] text-[clamp(18px,7cqw,26px)] leading-none font-black uppercase italic [font-stretch:112%]">
            {telemetry.city}
          </p>
        </div>
      </div>

      {/* In alto a destra: stelle e arsenale */}
      <div className="absolute top-2.5 right-3 flex flex-col items-end">
        <span
          role="img"
          aria-label="Livello di ricercato: cinque stelle"
          className="flex gap-0.5 text-hi"
        >
          {[1, 2, 3, 4, 5, 6].map((star) => (
            <IconStarFilled key={star} size={18} aria-hidden="true" />
          ))}
        </span>
        <p className="mt-0.5 text-[15px] font-black italic">DISPONIBILE</p>
        <p className={`${LABEL} mt-2.5 text-muted`}>Arsenale</p>
        <ul className="mt-1 flex gap-1 @max-[360px]:gap-0.5">
          {telemetry.arsenal.map((tech, index) => (
            <li
              key={tech}
              className={`${LABEL} px-[7px] @max-[360px]:px-1 @max-[360px]:text-[9px] py-1 transition-colors duration-300 ${
                index === weapon
                  ? "bg-accent text-on-accent"
                  : "bg-[#0b0014] text-muted"
              }`}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Al centro: missione in corso */}
      <div className="absolute inset-x-0 top-[128px] text-center">
        <p className={`${LABEL} text-muted`}>Missione in corso</p>
        <p className="text-2xl leading-tight font-black text-hi italic">
          {telemetry.garage.name}
        </p>
        <p className="text-xs">{telemetry.garage.description}</p>
      </div>

      {/* In basso: radar a sinistra, timer a destra, centrati tra loro */}
      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3">
        <div className="w-[clamp(72px,24cqw,104px)] shrink-0">
          <Radar className="block h-auto w-full" />
          <div
            aria-hidden="true"
            className="mt-[3px] grid grid-cols-[2fr_1fr] gap-[3px]"
          >
            <span className="h-[5px] bg-accent" />
            <span className="h-[5px] bg-hi" />
          </div>
        </div>

        <div className="text-right">
          <p className={`${LABEL} text-muted`}>
            {remaining?.done ? "Benvenuto a" : "Leonida tra"}
          </p>
          <p className="mt-1 text-[clamp(28px,10cqw,40px)] leading-none font-black text-accent italic [font-stretch:75%]">
            {remaining?.done
              ? "LEONIDA"
              : getCountdownParts(remaining).map((part) => (
                  <span key={part.unit} className="ml-2 first:ml-0">
                    {part.value}
                    <span className="ml-px text-[0.5em] text-muted not-italic">
                      {part.unit}
                    </span>
                  </span>
                ))}
          </p>
        </div>
      </div>
    </aside>
  );
}
