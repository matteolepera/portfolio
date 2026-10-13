import StackBadges from "../ui/StackBadges";

export default function FeaturedProject({ project }) {
  const lastLap = project.laps.length - 1;

  return (
    <article className="flex flex-wrap gap-5 rounded-[20px] border border-line bg-surface p-[18px] transition-colors duration-500 md:gap-7 md:p-6 lg:gap-10 lg:p-8">
      <div className="flex aspect-[16/10] min-w-0 flex-[1_1_480px] items-center justify-center overflow-hidden rounded-xl border border-line bg-bg font-mono text-[13px] text-muted">
        {project.image ? (
          <img
            src={project.image}
            alt={`Anteprima di ${project.name}`}
            className="size-full object-cover"
          />
        ) : (
          "[Screenshot in arrivo]"
        )}
      </div>

      <div className="min-w-0 flex-[1_1_380px]">
        <p className="font-mono text-xs tracking-[0.1em] text-accent-text uppercase">
          {project.badge}
        </p>
        <h3 className="display-title mt-3 text-4xl leading-[1.05]">
          {project.name}
        </h3>
        <p className="mt-3 text-lg">{project.description}</p>

        <StackBadges
          role={project.role}
          stack={project.stack}
          className="mt-4"
        />

        <p className="mt-6 mb-2.5 font-mono text-xs tracking-[0.12em] text-muted uppercase">
          Giro dopo giro
        </p>
        <ol className="flex flex-col gap-2.5">
          {project.laps.map((lap, index) => (
            <li key={lap.id} className="flex gap-3.5">
              <span
                className={`w-[60px] shrink-0 pt-0.5 font-mono text-[13px] ${
                  index === lastLap ? "text-accent-text" : "text-muted"
                }`}
              >
                Giro {lap.id}
              </span>
              <span>{lap.text}</span>
            </li>
          ))}
        </ol>

        <a
          href={project.linkUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block py-2.5 text-[15px] font-bold text-accent-text"
        >
          {project.linkLabel} ↗
        </a>
      </div>
    </article>
  );
}
