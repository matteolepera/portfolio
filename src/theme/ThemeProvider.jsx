import { useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";

const STORAGE_KEY = "livrea";

const FAVICONS = { rosso: "🏎️", vi: "🌴" };

function faviconFor(theme) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${FAVICONS[theme]}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

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
    const icon = document.querySelector('link[rel="icon"]');
    if (icon) icon.href = faviconFor(theme);
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
