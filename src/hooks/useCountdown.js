import { useEffect, useState } from "react";

function getRemaining(target) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  const totalMinutes = Math.floor(diff / 60000);

  return {
    days: Math.floor(totalMinutes / 1440),
    hours: Math.floor((totalMinutes % 1440) / 60),
    minutes: totalMinutes % 60,
    done: diff === 0,
  };
}

// Tempo che manca a una data, aggiornato ogni 15 secondi
export default function useCountdown(target) {
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    const tick = () => setRemaining(getRemaining(target));
    const first = setTimeout(tick, 0);
    const interval = setInterval(tick, 15000);

    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, [target]);

  return remaining;
}
