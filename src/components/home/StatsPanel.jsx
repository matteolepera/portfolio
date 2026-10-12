import Panel from "../ui/Panel";

export default function StatsPanel({ stats, note }) {
  return (
    <Panel title="Statistiche" className="flex-[1.4_1_380px]">
      <div className="flex flex-col gap-3.5 font-mono text-[13px]">
        {stats.map((stat) => (
          <div key={stat.id} className="flex items-center gap-3.5">
            <span className="w-[120px] shrink-0 md:w-40 lg:w-[170px]">
              {stat.label}
            </span>
            <span
              role="meter"
              aria-label={stat.label}
              aria-valuenow={stat.value}
              aria-valuemin={0}
              aria-valuemax={100}
              className="relative h-2 flex-1 overflow-hidden rounded-full bg-line"
            >
              <span
                className={`absolute inset-y-0 left-0 rounded-full transition-colors duration-500 ${
                  stat.value < 40 ? "bg-hi" : "bg-accent"
                }`}
                style={{ width: `${stat.value}%` }}
              />
            </span>
            <span className="w-7 shrink-0 text-right text-muted">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-[18px] text-sm text-muted">{note}</p>
    </Panel>
  );
}
