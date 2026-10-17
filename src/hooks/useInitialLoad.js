import { useEffect, useState } from "react";
import { useProjects } from "./useProjects";

const MIN_MS = 1000;
const MAX_MS = 4000;

// Pronto quando sono arrivati i progetti e i font, dopo almeno 1 secondo e comunque entro 4
export default function useInitialLoad() {
  const { isPending } = useProjects();
  const [minElapsed, setMinElapsed] = useState(false);
  const [fontsReady, setFontsReady] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const min = setTimeout(() => setMinElapsed(true), MIN_MS);
    const max = setTimeout(() => setTimedOut(true), MAX_MS);
    document.fonts.ready.then(() => setFontsReady(true));

    return () => {
      clearTimeout(min);
      clearTimeout(max);
    };
  }, []);

  if (timedOut) return true;
  return minElapsed && fontsReady && !isPending;
}
