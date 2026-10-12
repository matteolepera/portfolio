import { useEffect, useState } from "react";

const relativeTime = new Intl.RelativeTimeFormat("it", { numeric: "auto" });

const UNITS = [
  ["year", 31536000],
  ["month", 2592000],
  ["week", 604800],
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
];

function formatRelative(date) {
  const seconds = (new Date(date).getTime() - Date.now()) / 1000;
  for (const [unit, size] of UNITS) {
    if (Math.abs(seconds) >= size)
      return relativeTime.format(Math.round(seconds / size), unit);
  }
  return "adesso";
}

// Ultimo push pubblico dell'utente GitHub, già scritto in italiano ("3 ore fa", "ieri")
export default function useLastCommit(user) {
  const [state, setState] = useState({ status: "loading", label: "…" });

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://api.github.com/users/${user}/events/public?per_page=30`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok)
          throw new Error(`GitHub ha risposto ${response.status}`);
        return response.json();
      })
      .then((events) => {
        const push = events.find((event) => event.type === "PushEvent");
        setState(
          push
            ? { status: "ready", label: formatRelative(push.created_at) }
            : { status: "empty", label: "—" },
        );
      })
      .catch((error) => {
        if (error.name !== "AbortError")
          setState({ status: "error", label: "—" });
      });

    return () => controller.abort();
  }, [user]);

  return state;
}
