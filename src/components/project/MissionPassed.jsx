import { IconBrandGithub } from "@tabler/icons-react";

const LABEL =
  "text-[11px] font-semibold tracking-[0.08em] uppercase [font-stretch:75%]";

export default function MissionPassed({ project, inProgress }) {
  const stats = [
    { label: "Stagione", value: project.season },
    { label: "Durata", value: project.duration },
    { label: "Squadra", value: project.team },
    { label: "Ruolo", value: project.role, accent: true },
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

      <dl className="mx-auto mt-6 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className={`${LABEL} text-muted`}>{stat.label}</dt>
            <dd
              className={`mt-1 text-sm font-bold ${stat.accent ? "text-accent" : ""}`}
            >
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-accent px-6 font-bold text-on-accent"
        >
          <IconBrandGithub size={20} aria-hidden="true" />
          Codice su GitHub
        </a>
      )}
    </header>
  );
}
