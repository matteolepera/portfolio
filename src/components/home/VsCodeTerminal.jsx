import { IconPlus, IconTerminal2, IconTrash, IconX } from "@tabler/icons-react";
import { terminal } from "../../content/workflow";
import { useTheme } from "../../theme/themeContext";

// Colori presi dai temi di VS Code: Dark Modern per Rosso corsa, SynthWave '84 per la Modalità VI
const THEMES = {
  rosso: {
    panel: "#181818",
    tabsBg: "#181818",
    border: "#2b2b2b",
    tab: "#9d9d9d",
    tabActive: "#e7e7e7",
    tabLine: "#0078d4",
    text: "#cccccc",
    muted: "#9d9d9d",
    arrow: "#0dbc79",
    dir: "#11a8cd",
    git: "#2472c8",
    branch: "#cd3131",
    success: "#0dbc79",
    onSuccess: "#181818",
    cursor: "#cccccc",
  },
  vi: {
    panel: "#262335",
    tabsBg: "#241b2f",
    border: "#34294f",
    tab: "#8e83a8",
    tabActive: "#ffffff",
    tabLine: "#ff7edb",
    text: "#ffffff",
    muted: "#8e83a8",
    arrow: "#72f1b8",
    dir: "#36f9f6",
    git: "#ff7edb",
    branch: "#fede5d",
    success: "#72f1b8",
    onSuccess: "#262335",
    cursor: "#ff7edb",
  },
};

function Prompt({ colors, children }) {
  return (
    <p>
      <span className="font-bold" style={{ color: colors.arrow }}>
        ➜
      </span>
      {"  "}
      <span className="font-bold" style={{ color: colors.dir }}>
        {terminal.directory}
      </span>{" "}
      <span className="font-bold" style={{ color: colors.git }}>
        git:(
      </span>
      <span style={{ color: colors.branch }}>{terminal.branch}</span>
      <span className="font-bold" style={{ color: colors.git }}>
        )
      </span>{" "}
      {children}
    </p>
  );
}

function TerminalLine({ line, colors }) {
  switch (line.type) {
    case "prompt":
      return <Prompt colors={colors}>{line.text}</Prompt>;
    case "script":
      return <p style={{ color: colors.muted }}>{line.text}</p>;
    case "pass":
      return (
        <p>
          {"  "}
          <span
            className="px-1 font-bold"
            style={{ background: colors.success, color: colors.onSuccess }}
          >
            PASS
          </span>{" "}
          {line.text}
        </p>
      );
    case "ok":
      return (
        <p>
          {"  "}
          <span style={{ color: colors.success }}>[OK]</span> {line.text}
        </p>
      );
    case "tests":
      return (
        <p>
          {"  "}
          {line.label}
          {"  "}
          <span style={{ color: colors.success }}>{line.text}</span>
        </p>
      );
    case "cursor":
      return (
        <Prompt colors={colors}>
          <span
            aria-hidden="true"
            className="inline-block h-[1.1em] w-[0.6em] translate-y-[0.2em] animate-blink motion-reduce:animate-none"
            style={{ background: colors.cursor }}
          />
        </Prompt>
      );
    default:
      return null;
  }
}

export default function VsCodeTerminal() {
  const { theme } = useTheme();
  const colors = THEMES[theme];

  return (
    <figure
      aria-label="Terminale: controlli prima di ogni commit"
      className="m-0 min-w-0 flex-[0_1_420px] overflow-hidden rounded-[10px] border transition-colors duration-500 lg:sticky lg:top-28"
      style={{ background: colors.panel, borderColor: colors.border }}
    >
      <div
        aria-hidden="true"
        className="flex h-[34px] items-center gap-4 border-b px-3 text-[11px] tracking-[0.02em]"
        style={{
          background: colors.tabsBg,
          borderColor: colors.border,
          color: colors.tab,
        }}
      >
        <span>PROBLEMI</span>
        <span>OUTPUT</span>
        <span
          className="border-b py-2"
          style={{ color: colors.tabActive, borderColor: colors.tabLine }}
        >
          TERMINALE
        </span>
        <span
          className="ml-auto flex items-center gap-2.5"
          style={{ color: colors.text }}
        >
          <span className="flex items-center gap-1">
            <IconTerminal2 size={14} />
            zsh
          </span>
          <IconPlus size={14} />
          <IconTrash size={14} />
          <IconX size={14} />
        </span>
      </div>

      <div
        className="px-3.5 pt-2.5 pb-3 font-mono text-xs leading-[1.75] whitespace-pre-wrap"
        style={{ color: colors.text }}
      >
        {terminal.lines.map((line) => (
          <TerminalLine key={line.id} line={line} colors={colors} />
        ))}
      </div>
    </figure>
  );
}
