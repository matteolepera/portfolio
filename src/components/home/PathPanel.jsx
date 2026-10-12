import Panel from "../ui/Panel";

export default function PathPanel({ steps }) {
  return (
    <Panel title="Percorso" className="flex-[1_1_280px]">
      <ol>
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <li key={step.id} className="flex gap-3.5">
              <div
                aria-hidden="true"
                className="flex flex-col items-center pt-[7px]"
              >
                <span
                  className={`size-2.5 shrink-0 rounded-full transition-colors duration-500 ${
                    step.current ? "bg-accent" : "border-2 border-accent"
                  }`}
                />
                {!isLast && <span className="mt-1 w-0.5 flex-1 bg-line" />}
              </div>
              <div className={isLast ? "" : "pb-5"}>
                <p className="font-bold">{step.title}</p>
                <p className="mt-0.5 text-sm text-muted">{step.meta}</p>
                {step.text && <p className="mt-2 text-sm">{step.text}</p>}
              </div>
            </li>
          );
        })}
      </ol>
    </Panel>
  );
}
