import { useTheme } from "../../theme/themeContext";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isVi = theme === "vi";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isVi}
      aria-label="Modalità GTA VI"
      className="flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-line px-3 font-mono text-xs font-semibold tracking-[0.08em] text-ink"
    >
      VI
      <span
        aria-hidden="true"
        className={`relative h-5 w-[34px] rounded-full transition-colors duration-300 ${
          isVi ? "bg-accent" : "bg-line"
        }`}
      >
        <span
          className={`absolute top-[3px] left-[3px] size-3.5 rounded-full bg-white transition-transform duration-300 ${
            isVi ? "translate-x-3.5" : "translate-x-0"
          }`}
        />
      </span>
    </button>
  );
}
