import { techCategories } from "../../content/tech";

const CATEGORY_BAR = {
  frontend: "bg-sector",
  backend: "bg-hi",
  other: "bg-muted",
};

const LABEL =
  "block skew-x-12 py-[3px] text-[10px] font-bold tracking-[0.06em] uppercase [font-stretch:112%] lg:py-[5px] lg:text-xs";

export default function StackBadges({ role, stack, className = "" }) {
  return (
    <ul
      aria-label="Ruolo e tecnologie"
      className={`flex flex-wrap gap-1 lg:gap-2 ${className}`}
    >
      {role && (
        <li className="inline-flex -skew-x-12 overflow-hidden rounded-[3px] bg-accent transition-colors duration-500">
          <span className={`${LABEL} px-1.5 text-on-accent lg:px-[11px]`}>
            {role}
          </span>
        </li>
      )}

      {stack.map((tech) => {
        const category = techCategories[tech] ?? "other";

        return (
          <li
            key={tech}
            className="inline-flex -skew-x-12 items-stretch overflow-hidden rounded-[3px] border border-line bg-bg transition-colors duration-500"
          >
            <span
              aria-hidden="true"
              className={`w-[3px] shrink-0 lg:w-1 ${CATEGORY_BAR[category]}`}
            />
            <span
              className={`${LABEL} pr-1.5 pl-1 text-ink lg:pr-[11px] lg:pl-[9px]`}
            >
              {tech}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
