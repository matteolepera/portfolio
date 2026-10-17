import { useTheme } from "../../theme/themeContext";
import GameLoading from "./GameLoading";
import StartLights from "./StartLights";

// Il caricamento giusto per la livrea attuale
export default function LoadingScreen() {
  const { theme } = useTheme();
  return theme === "vi" ? <GameLoading /> : <StartLights />;
}
