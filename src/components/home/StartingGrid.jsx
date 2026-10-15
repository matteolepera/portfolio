import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import StackBadges from "../ui/StackBadges";

export default function StartingGrid({ projects }) {
  return (
    <ol aria-label="Altri progetti" className="flex flex-col gap-3.5">
      {projects.map((project) => (
        <li key={project.id}>
          <Link
            to={`/progetti/${project.id}`}
            className="group rounded-xl grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 gap-y-3 border-t-[3px] border-l-[3px] border-ink bg-surface px-4 py-4 transition-colors duration-300 hover:border-accent md:grid-cols-[64px_minmax(0,1fr)_auto] md:px-5"
          >
            <span className="text-[34px] leading-none font-extrabold italic [font-stretch:75%] md:text-4xl">
              {project.position}
            </span>

            <div className="min-w-0">
              <h3 className="display-title text-lg md:text-xl">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-muted md:text-[15px]">
                {project.description}
              </p>
              <StackBadges
                role={project.role}
                stack={project.stack}
                className="mt-3"
              />
            </div>

            <span className="col-start-2 flex items-center gap-1.5 font-mono text-xs tracking-[0.08em] text-muted uppercase transition-colors duration-300 group-hover:text-ink md:col-start-auto">
              Apri
              <IconArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
