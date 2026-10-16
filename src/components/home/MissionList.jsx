import { IconArrowRight, IconStarFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import StackBadges from "../ui/StackBadges";

export default function MissionList({ projects }) {
  return (
    <div>
      <p className="mb-2.5 text-[11px] font-semibold tracking-[0.08em] text-muted uppercase [font-stretch:75%]">
        Replay missioni · {projects.length} completate
      </p>

      <ol aria-label="Altri progetti" className="flex flex-col gap-3.5">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              to={`/progetti/${project.id}`}
              className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3 gap-y-3 rounded-xl border-l-4 border-hi bg-surface px-3 py-4 transition-colors duration-300 hover:border-accent md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-x-4 md:px-5"
            >
              <span
                aria-hidden="true"
                className="flex size-[30px] shrink-0 items-center justify-center self-start rounded-full bg-hi text-sm font-black text-bg md:size-9 md:self-center md:text-base"
              >
                {project.name.charAt(0)}
              </span>

              <div className="min-w-0">
                <h3 className="text-lg leading-tight font-black uppercase italic md:text-xl">
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

              <div className="col-start-2 flex items-center justify-between gap-4 md:col-start-auto md:flex-col md:items-end md:justify-center md:gap-2">
                <div className="md:text-right">
                  <p className="text-xs font-black text-accent italic">
                    COMPLETATA
                  </p>
                  <p
                    role="img"
                    aria-label="Tre stelle"
                    className="mt-0.5 flex gap-px text-hi md:justify-end"
                  >
                    {[1, 2, 3].map((star) => (
                      <IconStarFilled key={star} size={12} aria-hidden="true" />
                    ))}
                  </p>
                </div>
                <span className="flex items-center gap-1.5 font-mono text-xs tracking-[0.08em] text-muted uppercase transition-colors duration-300 group-hover:text-ink">
                  Rivedi
                  <IconArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
