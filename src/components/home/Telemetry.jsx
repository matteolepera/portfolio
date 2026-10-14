import { useTheme } from "../../theme/themeContext";
import F1Telemetry from "./telemetry/F1Telemetry";
import GtaHud from "./telemetry/GtaHud";

export default function Telemetry() {
  const { theme } = useTheme();

  return (
    <div
      key={theme}
      className={`flex min-w-0 animate-panel-in motion-reduce:animate-none ${
        theme === "vi" ? "flex-[1_1_420px]" : "flex-[1_1_340px]"
      }`}
    >
      {theme === "vi" ? <GtaHud /> : <F1Telemetry />}
    </div>
  );
}
