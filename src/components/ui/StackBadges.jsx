import { techCategories } from "../../content/tech";

const CATEGORY_BAR = {
  frontend: "bg-sector",
  backend: "bg-hi",
  other: "bg-muted",
};

const LABEL =
  "block skew-x-12 py-1 text-[11px] font-bold tracking-[0.06em] uppercase [font-stretch:112%] md:py-[5px] md:text-xs";

export default function StackBadges({ role, stack, className = "" }) {
  return (
    <ul
      aria-label="Ruolo e tecnologie"
      className={`flex flex-wrap gap-1.5 md:gap-2 ${className}`}
    >
      {role && (
        <li className="inline-flex -skew-x-12 overflow-hidden rounded-[3px] bg-accent transition-colors duration-500">
          <span className={`${LABEL} px-2 text-on-accent md:px-[11px]`}>
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
              className={`w-1 shrink-0 ${CATEGORY_BAR[category]}`}
            />
            <span
              className={`${LABEL} pr-2 pl-1.5 text-ink md:pr-[11px] md:pl-[9px]`}
            >
              {tech}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
