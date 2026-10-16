const ITEMS = [
  { key: "goal", title: "Briefing", border: "border-hi", color: "text-hi" },
  {
    key: "approach",
    title: "Svolgimento",
    border: "border-hi",
    color: "text-hi",
  },
  {
    key: "challenge",
    title: "Imprevisti",
    border: "border-hi",
    color: "text-hi",
  },
  {
    key: "learned",
    title: "Ricompensa",
    border: "border-accent",
    color: "text-accent",
  },
];

export default function Dossier({ debrief }) {
  return (
    <section aria-labelledby="dossier-title">
      <h2
        id="dossier-title"
        className="mb-3 text-[11px] font-semibold tracking-[0.08em] text-muted uppercase [font-stretch:75%]"
      >
        Dossier della missione
      </h2>
      <div className="grid gap-3 md:grid-cols-2">
        {ITEMS.map((item) => (
          <article
            key={item.key}
            className={`rounded-xl border-l-4 bg-surface p-4 transition-colors duration-500 md:p-5 ${item.border}`}
          >
            <h3 className={`text-sm font-black uppercase italic ${item.color}`}>
              {item.title}
            </h3>
            <p className="mt-2 text-[15px] text-muted md:text-base">
              {debrief[item.key]}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
