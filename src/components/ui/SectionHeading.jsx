export default function SectionHeading({ index, kicker, title, action }) {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-3">
      <div>
        <p className="font-mono text-[13px] tracking-[0.12em] text-accent-text uppercase">
          {index} — {kicker}
        </p>
        <h2 className="display-title mt-3.5 text-[clamp(32px,3.6vw,52px)] leading-none">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
