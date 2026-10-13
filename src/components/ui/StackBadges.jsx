export default function StackBadges({ role, stack, className = "" }) {
  return (
    <ul
      aria-label="Ruolo e tecnologie"
      className={`flex flex-wrap gap-2 ${className}`}
    >
      {role && (
        <li className="inline-flex items-center rounded-full border border-accent-text/40 bg-accent-text/10 px-2.5 py-1 font-mono text-xs font-semibold text-accent-text transition-colors duration-500">
          {role}
        </li>
      )}
      {stack.map((tech) => (
        <li
          key={tech}
          className="inline-flex items-center rounded-full border border-line px-2.5 py-1 font-mono text-xs text-ink"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}
