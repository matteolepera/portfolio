import StackBadges from "../ui/StackBadges";

export default function ProjectRow({ project }) {
  const hasLinks = project.demoUrl || project.codeUrl;

  return (
    <article className="flex flex-wrap items-baseline gap-x-8 gap-y-3 border-b border-line px-2 py-7">
      <div className="min-w-0 flex-[1_1_400px]">
        <h3 className="display-title text-2xl">{project.name}</h3>
        <p className="mt-1.5 text-muted">{project.description}</p>
      </div>

      <StackBadges
        role={project.role}
        stack={project.stack}
        className="min-w-0 flex-[1_1_200px]"
      />

      {hasLinks && (
        <div className="flex shrink-0 gap-5 text-[15px] font-bold">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="py-2.5"
            >
              Demo ↗
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="py-2.5"
            >
              Codice ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}
