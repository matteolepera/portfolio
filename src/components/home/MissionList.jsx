import { IconArrowRight, IconStarFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function MissionList({ projects }) {
  return (
    <div>
      <p className="mb-2.5 text-[11px] font-semibold tracking-[0.08em] text-muted uppercase [font-stretch:75%]">
        Replay missioni · {projects.length} completate
      </p>

      <ol aria-label="Altri progetti" className="flex flex-col gap-2">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              to={`/progetti/${project.id}`}
              className="group flex items-center gap-3 border-l-4 border-hi bg-surface px-3 py-3 transition-colors duration-300 hover:border-accent md:gap-4 md:px-4"
            >
              <span
                aria-hidden="true"
                className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-hi text-sm font-black text-bg md:size-9 md:text-base"
              >
                {project.name.charAt(0)}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-[17px] leading-tight font-black uppercase italic md:text-xl">
                  {project.name}
                </h3>
                <p className="mt-0.5 truncate text-xs text-muted md:text-sm">
                  {project.description}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <p className="text-xs font-black text-accent italic">
                  COMPLETATA
                </p>
                <p
                  role="img"
                  aria-label="Tre stelle"
                  className="mt-0.5 flex justify-end gap-px text-hi"
                >
                  {[1, 2, 3].map((star) => (
                    <IconStarFilled key={star} size={12} aria-hidden="true" />
                  ))}
                </p>
              </div>

              <IconArrowRight
                size={18}
                aria-hidden="true"
                className="hidden shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink md:block"
              />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
