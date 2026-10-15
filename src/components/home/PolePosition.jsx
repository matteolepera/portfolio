import { Link } from "react-router-dom";
import StackBadges from "../ui/StackBadges";

const LABEL =
  "text-[11px] font-semibold tracking-[0.08em] uppercase [font-stretch:75%]";

export default function PolePosition({ project }) {
  const lastLap = project.laps.length - 1;

  return (
    <article className="border-t-[3px] border-l-[3px] border-accent bg-surface transition-colors duration-500">
      <header className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 pt-4 md:px-6 md:pt-5">
        <span className="text-[44px] leading-none font-extrabold italic [font-stretch:75%] md:text-5xl">
          {project.position}
        </span>
        <span className={`${LABEL} text-muted`}>Pole position</span>
        <span className={`${LABEL} ml-auto flex items-center gap-1.5 text-hi`}>
          <span
            aria-hidden="true"
            className="size-[7px] animate-pulse rounded-full bg-hi"
          />
          In pista · in sviluppo
        </span>
      </header>

      <div className="grid gap-5 p-4 md:p-6 lg:grid-cols-2 lg:gap-8">
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border border-line bg-bg">
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
          <span
            className={`${LABEL} absolute top-2.5 left-2.5 bg-accent px-1.5 py-0.5 text-on-accent`}
          >
            Onboard
          </span>
        </div>

        <div className="min-w-0">
          <h3 className="display-title text-3xl leading-none md:text-4xl">
            {project.name}
          </h3>
          <p className="mt-3 text-muted md:text-lg">{project.description}</p>
          <StackBadges
            role={project.role}
            stack={project.stack}
            className="mt-4"
          />

          <p className={`${LABEL} mt-6 mb-2 text-muted`}>Tempi sul giro</p>
          <ol className="flex flex-col gap-2 text-sm">
            {project.laps.map((lap, index) => {
              const current = index === lastLap;

              return (
                <li
                  key={lap.id}
                  className="grid grid-cols-[28px_minmax(0,1fr)_auto] items-center gap-x-3"
                >
                  <span
                    className={`${LABEL} ${current ? "text-sector" : "text-muted"}`}
                  >
                    G{lap.id}
                  </span>
                  <span>{lap.short}</span>
                  <span
                    aria-hidden="true"
                    className={`h-1 w-[22px] rounded-full ${current ? "bg-sector" : "bg-hi"}`}
                  />
                  <span className="sr-only">
                    {current ? "in corso" : "completato"}
                  </span>
                </li>
              );
            })}
          </ol>

          <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-1">
            <Link
              to={`/progetti/${project.id}`}
              className={`${LABEL} py-2 text-[13px] text-accent-text`}
            >
              Apri il progetto →
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
