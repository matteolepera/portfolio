import { IconBrandGithub, IconStarFilled } from "@tabler/icons-react";

const LABEL =
  "text-[11px] font-semibold tracking-[0.08em] uppercase [font-stretch:75%]";

export default function MissionPassed({ project, inProgress }) {
  const stats = [
    { label: "Anno", value: project.season },
    { label: "Tempo impiegato", value: project.duration },
    { label: "Squadra", value: project.team },
  ];

  return (
    <header className="text-center">
      <p
        className={`text-[clamp(30px,8vw,56px)] leading-none font-black italic ${
          inProgress ? "text-accent" : "text-hi"
        }`}
      >
        {inProgress ? "MISSIONE IN CORSO" : "MISSIONE SUPERATA"}
      </p>
      <h1 className="mt-2 text-[clamp(22px,4.5vw,34px)] leading-tight font-black uppercase italic">
        {project.name}
      </h1>
      <p className="mx-auto mt-3 max-w-[56ch] text-muted md:text-lg">
        {project.description}
      </p>

      <dl className="mx-auto mt-6 grid max-w-lg grid-cols-3 gap-x-4 gap-y-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className={`${LABEL} text-muted`}>{stat.label}</dt>
            <dd className="mt-1 text-sm font-bold">{stat.value}</dd>
          </div>
        ))}
      </dl>
      <div>
        <dt className={`${LABEL} text-muted`}>Valutazione</dt>
        <dd className="mt-1 flex justify-center">
          {inProgress ? (
            <span className="text-sm font-bold text-accent">In corso</span>
          ) : (
            <span
              role="img"
              aria-label="Tre stelle"
              className="flex gap-0.5 text-hi"
            >
              {[1, 2, 3].map((star) => (
                <IconStarFilled key={star} size={16} aria-hidden="true" />
              ))}
            </span>
          )}
        </dd>
      </div>

      {project.repos.length > 0 && (
        <div className="mt-6 flex flex-wrap justify-center gap-2 lg:gap-3">
          {project.repos.map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${repo.label} su GitHub`}
              className="inline-flex min-h-11 items-center gap-3 rounded-full bg-accent px-4 text-sm font-bold text-on-accent lg:min-h-[52px] lg:gap-2.5 lg:px-6 lg:text-base"
            >
              <IconBrandGithub
                aria-hidden="true"
                className="size-4 lg:size-5"
              />
              {repo.label}
              <span className="hidden lg:inline">su GitHub</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
