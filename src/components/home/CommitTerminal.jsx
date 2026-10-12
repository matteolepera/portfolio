function TerminalLine({ line }) {
  switch (line.type) {
    case "path":
      return (
        <p className="text-muted">
          {line.text} <span className="text-hi">{line.branch}</span>
        </p>
      );
    case "command":
      return (
        <p>
          <span className="text-accent-text">$</span> {line.text}
        </p>
      );
    case "check":
      return (
        <p className="text-muted">
          {"  "}
          <span className="text-hi">✓</span> {line.text}
        </p>
      );
    default:
      return <p className="text-muted">{`  ${line.text}`}</p>;
  }
}

export default function CommitTerminal({ lines }) {
  return (
    <figure className="m-0 min-w-0 flex-[0_1_360px] overflow-hidden rounded-[14px] border border-line bg-surface font-mono text-xs leading-[1.8] transition-colors duration-500 lg:sticky lg:top-28">
      <figcaption className="flex items-center justify-between border-b border-line px-4 py-3 text-xs tracking-[0.1em] text-muted uppercase">
        <span>Prima di ogni commit</span>
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-[9px] rounded-full bg-line" />
          <span className="size-[9px] rounded-full bg-line" />
          <span className="size-[9px] rounded-full bg-line" />
        </span>
      </figcaption>
      <div className="px-4 py-3.5 whitespace-pre-wrap">
        {lines.map((line) => (
          <TerminalLine key={line.id} line={line} />
        ))}
      </div>
    </figure>
  );
}
