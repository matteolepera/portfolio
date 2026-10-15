import StackBadges from "../ui/StackBadges";
import LapList from "../project/LapList";

export default function FeaturedProject({ project }) {
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

        <LapList laps={project.laps} />

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
