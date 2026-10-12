export default function HabitList({ habits }) {
  return (
    <ol className="min-w-0 flex-[999_1_520px] border-t border-line">
      {habits.map((habit) => (
        <li key={habit.id} className="flex gap-6 border-b border-line py-7">
          <span className="w-10 shrink-0 pt-1 font-mono text-sm text-accent-text">
            {String(habit.id).padStart(2, "0")}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-[22px] font-extrabold [font-stretch:112%]">
              {habit.title}
            </h3>
            <p className="mt-2 text-muted">{habit.text}</p>
            <p className="mt-3 font-mono text-[13px]">
              <span className="text-hi">Dove si vede ›</span> {habit.proof}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
