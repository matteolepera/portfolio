import { useEffect, useState } from "react";

const DAYS = 30;
const DAY_MS = 24 * 60 * 60 * 1000;

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

function startOfDay(date) {
  const day = new Date(date);
  day.setHours(0, 0, 0, 0);
  return day.getTime();
}

// Push pubblici degli ultimi 30 giorni: serie giorno per giorno, totale e ultimo push
export default function useGitHubActivity(user) {
  const [state, setState] = useState({
    status: "loading",
    lastPush: "…",
    total: 0,
    series: Array(DAYS).fill(0),
  });

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://api.github.com/users/${user}/events/public?per_page=100`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok)
          throw new Error(`GitHub ha risposto ${response.status}`);
        return response.json();
      })
      .then((events) => {
        const pushes = events.filter((event) => event.type === "PushEvent");
        const today = startOfDay(Date.now());
        const series = Array(DAYS).fill(0);

        for (const push of pushes) {
          const daysAgo = Math.round(
            (today - startOfDay(push.created_at)) / DAY_MS,
          );
          if (daysAgo >= 0 && daysAgo < DAYS) series[DAYS - 1 - daysAgo] += 1;
        }

        setState({
          status: pushes.length > 0 ? "ready" : "empty",
          lastPush:
            pushes.length > 0 ? formatRelative(pushes[0].created_at) : "—",
          total: series.reduce((sum, count) => sum + count, 0),
          series,
        });
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setState({
            status: "error",
            lastPush: "—",
            total: 0,
            series: Array(DAYS).fill(0),
          });
        }
      });

    return () => controller.abort();
  }, [user]);

  return state;
}
