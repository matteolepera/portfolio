export default function Avatar({ className = "", ring = "border-3" }) {
  return (
    <span
      title="Foto profilo"
      className={`flex shrink-0 items-end justify-center overflow-hidden rounded-full border-accent bg-surface text-muted transition-colors duration-500 ${ring} ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="size-[78%]"
      >
        <circle cx="12" cy="9" r="4" />
        <path d="M4 23c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
      </svg>
    </span>
  );
}
