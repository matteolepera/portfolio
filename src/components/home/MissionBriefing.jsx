import { IconCheck } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import StackBadges from "../ui/StackBadges";

const LABEL =
  "text-[11px] font-semibold tracking-[0.08em] uppercase [font-stretch:75%]";

export default function MissionBriefing({ project }) {
  const lastLap = project.laps.length - 1;

  return (
    <article className="rounded-2xl border-l-4 border-accent bg-surface transition-colors duration-500">
      <header className="flex flex-wrap items-center gap-x-3 gap-y-2 px-4 pt-4 md:px-6 md:pt-5">
        <span
          aria-hidden="true"
          className="flex size-10 items-center justify-center rounded-full bg-hi text-lg font-black text-bg md:size-12 md:text-xl"
        >
          {project.name.charAt(0)}
        </span>
        <span className={`${LABEL} text-muted`}>Missione principale</span>
        <span className="ml-auto text-xs font-black text-accent uppercase italic">
          In corso
        </span>
      </header>

      <div className="grid gap-6 p-4 md:p-6 lg:grid-cols-2 lg:gap-8">
        {/* Schermata di caricamento della missione */}
        <div className="self-start overflow-hidden rounded-xl border border-line bg-bg">
          <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-surface">
            {project.image ? (
              <img
                src={project.image}
                alt={`Anteprima di ${project.name}`}
                width="1600"
                height="1000"
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            ) : (
              <span className={`${LABEL} text-muted`}>
                [Screenshot in arrivo]
              </span>
            )}

            <div
              aria-hidden="true"
              className="absolute bottom-3 -left-3 skew-x-[-14deg] bg-accent py-0.5 pr-4 pl-6 md:bottom-5 md:py-1 md:pr-5 md:pl-7"
            >
              <span className="block skew-x-[14deg] text-sm font-black text-on-accent uppercase italic md:text-base">
                {project.subtitle}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 bg-[#0b0014] px-3.5 py-2">
            <span
              aria-hidden="true"
              className="size-3.5 animate-spin rounded-full border-2 border-hi border-t-transparent motion-reduce:animate-none"
            />
            <span className={`${LABEL} text-ink`}>Caricamento</span>
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="text-3xl leading-none font-black text-hi italic md:text-4xl">
            {project.name}
          </h3>
          <p className="mt-3 text-muted md:text-lg">{project.description}</p>

          <p className={`${LABEL} mt-6 mb-2 text-muted`}>Obiettivi</p>
          <ol className="flex flex-col gap-1.5 text-sm">
            {project.laps.map((lap, index) => {
              const current = index === lastLap;

              return (
                <li
                  key={lap.id}
                  className={`flex items-center gap-2.5 ${current ? "font-bold text-[#ffc857]" : "text-muted"}`}
                >
                  {current ? (
                    <span
                      aria-hidden="true"
                      className="size-3 shrink-0 border-2 border-current"
                    />
                  ) : (
                    <IconCheck
                      size={14}
                      stroke={3}
                      aria-hidden="true"
                      className="shrink-0 text-[#72f1b8]"
                    />
                  )}
                  <span className={current ? "" : "line-through"}>
                    {lap.short}
                  </span>
                  <span className="sr-only">
                    {current ? "in corso" : "completato"}
                  </span>
                </li>
              );
            })}
          </ol>

          <StackBadges
            role={project.role}
            stack={project.stack}
            className="mt-5"
          />

          <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-1">
            <Link
              to={`/progetti/${project.id}`}
              className={`${LABEL} py-2 text-[13px] text-accent`}
            >
              Avvia la missione →
            </Link>
            <a
              href={project.linkUrl}
              target="_blank"
              rel="noreferrer"
              className="py-2 text-sm text-muted"
            >
              {project.linkLabel} ↗
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
