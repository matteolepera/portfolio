export default function LapList({ laps }) {
  const lastLap = laps.length - 1;

  return (
    <>
      <p className="mt-6 mb-2.5 font-mono text-xs tracking-[0.12em] text-muted uppercase">
        Giro dopo giro
      </p>
      <ol className="flex flex-col gap-2.5">
        {laps.map((lap, index) => (
          <li key={lap.id} className="flex gap-3.5">
            <span
              className={`w-[60px] shrink-0 pt-0.5 font-mono text-[13px] ${
                index === lastLap ? "text-accent-text" : "text-muted"
              }`}
            >
              Giro {lap.id}
            </span>
            <span>{lap.text}</span>
          </li>
        ))}
      </ol>
    </>
  );
}
