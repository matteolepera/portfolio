import { useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";

const STORAGE_KEY = "livrea";

function getInitialTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "vi" ? "vi" : "rosso";
  } catch {
    return "rosso";
  }
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // storage non disponibile: la livrea vale solo per questa visita
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((current) => (current === "rosso" ? "vi" : "rosso"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
