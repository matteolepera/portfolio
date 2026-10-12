import { useTheme } from "../../theme/themeContext";

const FACE =
  "absolute inset-0 flex items-center justify-center rounded-full text-[19px] leading-none backface-hidden";

export default function LiveryCoin() {
  const { theme, toggleTheme } = useTheme();
  const isVi = theme === "vi";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isVi}
      aria-label="Cambia livrea: modalità GTA VI"
      title="Cambia livrea"
      className="flex min-h-[52px] w-[52px] shrink-0 cursor-pointer items-center justify-center perspective-[260px]"
    >
      <span
        aria-hidden="true"
        className={`relative size-9 transition-transform duration-[800ms] ease-[cubic-bezier(0.34,1.4,0.64,1)] transform-3d ${
          isVi ? "rotate-y-180" : "rotate-y-0"
        }`}
      >
        <span
          className={`${FACE} bg-[#171717] shadow-[inset_0_0_0_2px_#d40000,0_4px_10px_rgba(0,0,0,0.35)]`}
        >
          🏎️
        </span>
        <span
          className={`${FACE} rotate-y-180 bg-[linear-gradient(180deg,#7a4bb0_0%,#ff1fa9_60%,#ffa24e_100%)] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.25),0_4px_10px_rgba(0,0,0,0.35)]`}
        >
          🌴
        </span>
      </span>
    </button>
  );
}
