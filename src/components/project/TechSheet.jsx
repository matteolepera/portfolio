import { IconBrandGithub } from "@tabler/icons-react";

const LABEL =
  "text-[11px] font-semibold tracking-[0.08em] uppercase [font-stretch:75%]";

export default function TechSheet({ project }) {
  const rows = [
    { label: "Stagione", value: project.season },
    { label: "Durata", value: project.duration },
    { label: "Squadra", value: project.team },
  ];

  return (
    <aside
      aria-label="Scheda tecnica"
      className="overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-500"
    >
      <p
        className={`${LABEL} flex items-center gap-2 border-b border-line px-4 py-2.5 text-ink`}
      >
        <span aria-hidden="true" className="h-3.5 w-1 bg-accent" />
        Scheda tecnica
      </p>

      <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 gap-y-2.5 px-4 py-3.5 text-sm">
        {rows.map((row) => (
          <div key={row.label} className="contents">
            <dt className={`${LABEL} self-center text-muted`}>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}

        {project.repos.length > 0 && (
          <div className="contents">
            <dt className={`${LABEL} self-start pt-0.5 text-muted`}>Box</dt>
            <dd className="flex flex-col gap-1">
              {project.repos.map((repo) => (
                <a
                  key={repo.url}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-accent-text"
                >
                  <IconBrandGithub size={16} aria-hidden="true" />
                  {repo.label} ↗
                </a>
              ))}
            </dd>
          </div>
        )}
      </dl>
    </aside>
  );
}
