const LABEL =
  "text-[11px] font-semibold tracking-[0.08em] uppercase [font-stretch:75%]";

const ITEMS = [
  { key: "goal", title: "Obiettivo della gara", color: "text-hi" },
  { key: "approach", title: "Strategia", color: "text-hi" },
  { key: "challenge", title: "Problemi in gara", color: "text-hi" },
  { key: "learned", title: "Per la prossima gara", color: "text-sector" },
];

export default function Debrief({ debrief }) {
  return (
    <section aria-labelledby="debrief-title">
      <h2 id="debrief-title" className={`${LABEL} mb-3 text-muted`}>
        Debriefing con l'ingegnere di pista
      </h2>
      <div className="grid gap-3 md:grid-cols-2">
        {ITEMS.map((item) => (
          <article
            key={item.key}
            className="rounded-xl border border-line bg-surface p-4 transition-colors duration-500 md:p-5"
          >
            <h3 className={`${LABEL} ${item.color}`}>{item.title}</h3>
            <p className="mt-2 text-[15px] text-muted md:text-base">
              {debrief[item.key]}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
