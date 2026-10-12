export default function Panel({ title, className = "", children }) {
  return (
    <div
      className={`min-w-0 rounded-2xl border border-line bg-surface p-6 transition-colors duration-500 ${className}`}
    >
      <p className="mb-[18px] font-mono text-xs tracking-[0.12em] text-muted uppercase">
        {title}
      </p>
      {children}
    </div>
  );
}
