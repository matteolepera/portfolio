import { profile, telemetry } from "../../../content/profile";
import useGitHubActivity from "../../../hooks/useGitHubActivity";
import ActivityTrace from "./ActivityTrace";

const LABEL =
  "text-[11px] font-semibold tracking-[0.08em] uppercase [font-stretch:75%]";

// Colori fissi delle mescole Pirelli: non cambiano con la livrea
const COMPOUND_RING = {
  S: "border-[#d40000]",
  M: "border-[#ffd100]",
  H: "border-[#f5f2ee]",
  I: "border-[#00c853]",
};

export default function F1Telemetry() {
  const activity = useGitHubActivity(profile.githubUser);

  return (
    <aside
      aria-label="Telemetria"
      className="min-w-0 flex-[1_1_340px] overflow-hidden rounded-2xl border border-line bg-surface"
    >
      <div className="flex items-center gap-2 border-b border-line px-3.5 py-2.5">
        <span aria-hidden="true" className="h-4 w-1 bg-accent" />
        <span className={`${LABEL} text-xs text-ink`}>Telemetria</span>
        <span className={`${LABEL} ml-auto flex items-center gap-1.5 text-hi`}>
          <span
            aria-hidden="true"
            className="size-1.5 animate-pulse rounded-full bg-hi"
          />
          Live
        </span>
      </div>

      <div className="px-3.5 pt-3 pb-1.5">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className={`${LABEL} text-muted`}>Attività GitHub · 30 giorni</p>
            <p className="mt-0.5 text-[44px] leading-[0.95] font-extrabold italic [font-stretch:75%]">
              {activity.status === "loading" ? "–" : activity.total}
              <span className={`${LABEL} ml-1.5 not-italic text-muted`}>
                push
              </span>
            </p>
          </div>
          <p className={`${LABEL} text-right text-muted`}>
            Ultimo push
            <span className="block text-[13px] text-ink">
              {activity.lastPush}
            </span>
          </p>
        </div>
        <ActivityTrace series={activity.series} />
      </div>

      <div className="grid grid-cols-[1fr_auto] items-center gap-3 border-t border-line px-3.5 py-2.5">
        <div>
          <p className={`${LABEL} flex justify-between`}>
            <span className="text-muted">Acceleratore</span>
            <span className="text-[#00c853]">100%</span>
          </p>
          <div aria-hidden="true" className="mt-1.5 h-1.5 bg-line">
            <div className="h-full w-full bg-[#00c853]" />
          </div>
          <p className="mt-1.5 text-xs text-muted">{telemetry.status}</p>
        </div>
        <div className="text-center">
          <p
            className={`${LABEL} border-[1.5px] border-[#00c853] px-2.5 py-1 text-xs text-[#00c853]`}
          >
            DRS
          </p>
          <p className="mt-1 text-[11px] text-muted">anche remoto</p>
        </div>
      </div>

      <div className="grid grid-cols-2 border-t border-line">
        <div className="border-r border-line px-3.5 py-2.5">
          <p className={`${LABEL} text-muted`}>Circuito</p>
          <p className="mt-0.5 text-sm font-bold">{telemetry.city}</p>
        </div>
        <div className="px-3.5 py-2.5">
          <p className={`${LABEL} text-muted`}>Ai box</p>
          <p className="mt-0.5 text-sm font-bold">{telemetry.garage.name}</p>
        </div>
      </div>

      <div className="border-t border-line px-3.5 pt-2.5 pb-3">
        <p className={`${LABEL} mb-2 text-muted`}>Mescole</p>
        <ul className="grid grid-cols-4 gap-1">
          {telemetry.compounds.map((item) => (
            <li
              key={item.tech}
              className="flex min-w-0 flex-col items-center gap-1.5"
            >
              <span
                aria-hidden="true"
                className={`flex size-[30px] items-center justify-center rounded-full border-4 text-[11px] font-extrabold ${COMPOUND_RING[item.compound]}`}
              >
                {item.compound}
              </span>
              <span className={`${LABEL} max-w-full truncate text-ink`}>
                {item.tech}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
