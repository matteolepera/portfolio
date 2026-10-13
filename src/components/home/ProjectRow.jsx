import StackBadges from "../ui/StackBadges";

export default function ProjectRow({ project }) {
  const hasLinks = project.demoUrl || project.codeUrl;

  return (
    <article className="grid gap-y-3 border-b border-line px-1 py-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_auto] lg:items-center lg:gap-x-8 lg:px-2 lg:py-7">
      <div className="min-w-0">
        <h3 className="display-title text-xl lg:text-2xl">{project.name}</h3>
        <p className="mt-1.5 text-[15px] text-muted lg:text-base">
          {project.description}
        </p>
      </div>

      <StackBadges
        role={project.role}
        stack={project.stack}
        className="min-w-0"
      />

      {hasLinks && (
        <div className="flex gap-5 text-[15px] font-bold">
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
