export default function Section({ id, kicker, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-20 rounded-xl border border-white/10 bg-card p-6 sm:p-8"
    >
      <p className="text-xs font-semibold tracking-widest text-orange uppercase">
        {kicker}
      </p>
      <h2 className="mt-1 font-display text-3xl tracking-wide text-ink uppercase">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
