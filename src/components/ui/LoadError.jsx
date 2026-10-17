import { IconRefresh } from "@tabler/icons-react";
import { useTheme } from "../../theme/themeContext";

const TITLES = {
  rosso: "Bandiera rossa",
  vi: "Segnale perso",
};

export default function LoadError({ message, onRetry, retrying }) {
  const { theme } = useTheme();

  return (
    <div
      role="alert"
      className="rounded-2xl border border-line bg-surface p-6 text-center md:p-8"
    >
      <p className="text-[11px] font-semibold tracking-[0.08em] text-accent-text uppercase [font-stretch:75%]">
        {TITLES[theme]}
      </p>
      <p className="mx-auto mt-2 max-w-[44ch] text-muted">{message}</p>
      <button
        type="button"
        onClick={() => onRetry()}
        disabled={retrying}
        className="mt-5 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full bg-accent px-5 font-bold text-on-accent transition-opacity disabled:cursor-wait disabled:opacity-60"
      >
        <IconRefresh
          size={18}
          aria-hidden="true"
          className={retrying ? "animate-spin motion-reduce:animate-none" : ""}
        />
        {retrying ? "Riprovo…" : "Riprova"}
      </button>
    </div>
  );
}
