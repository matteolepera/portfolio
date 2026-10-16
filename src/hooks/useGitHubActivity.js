import { useEffect, useState } from "react";

const DAYS = 30;
const DAY_MS = 24 * 60 * 60 * 1000;
const CACHE_MS = 5 * 60 * 1000;

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

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`GitHub ha risposto ${response.status}`);
  return response.json();
}

// Fino a 3 pagine da 100 eventi, fermandosi appena si superano i 30 giorni
async function fetchRecentEvents(user) {
  const since = startOfDay(Date.now()) - (DAYS - 1) * DAY_MS;
  const events = [];

  for (let page = 1; page <= 3; page += 1) {
    const batch = await fetchJson(
      `https://api.github.com/users/${user}/events/public?per_page=100&page=${page}`,
    );
    events.push(...batch);

    const oldest = batch[batch.length - 1];
    if (
      batch.length < 100 ||
      !oldest ||
      new Date(oldest.created_at).getTime() < since
    )
      break;
  }

  return events;
}

async function loadActivity(user) {
  const [events, repos] = await Promise.all([
    fetchRecentEvents(user),
    fetchJson(
      `https://api.github.com/users/${user}/repos?sort=pushed&per_page=1`,
    ),
  ]);

  // Grafico: push giorno per giorno degli ultimi 30 giorni (dagli eventi, che possono arrivare in ritardo)
  const pushes = events.filter((event) => event.type === "PushEvent");
  const today = startOfDay(Date.now());
  const series = Array(DAYS).fill(0);

  for (const push of pushes) {
    const daysAgo = Math.round((today - startOfDay(push.created_at)) / DAY_MS);
    if (daysAgo >= 0 && daysAgo < DAYS) series[DAYS - 1 - daysAgo] += 1;
  }

  // Ultimo push: dal repository aggiornato più di recente, che è in tempo reale
  const lastPushDate = repos[0]?.pushed_at ?? pushes[0]?.created_at ?? null;

  return {
    series,
    total: series.reduce((sum, count) => sum + count, 0),
    lastPushDate,
  };
}

// Memoria condivisa: una sola chiamata ogni 5 minuti, anche cambiando livrea
let cache = null;

function getActivity(user) {
  const now = Date.now();
  if (!cache || cache.user !== user || now - cache.time > CACHE_MS) {
    const promise = loadActivity(user);
    cache = { user, time: now, promise };
    promise.catch(() => {
      cache = null;
    });
  }
  return cache.promise;
}

export default function useGitHubActivity(user) {
  const [state, setState] = useState({
    status: "loading",
    lastPush: "…",
    total: 0,
    series: Array(DAYS).fill(0),
  });

  useEffect(() => {
    let cancelled = false;

    getActivity(user)
      .then((activity) => {
        if (cancelled) return;
        setState({
          status: activity.lastPushDate ? "ready" : "empty",
          lastPush: activity.lastPushDate
            ? formatRelative(activity.lastPushDate)
            : "—",
          total: activity.total,
          series: activity.series,
        });
      })
      .catch(() => {
        if (!cancelled) {
          setState({
            status: "error",
            lastPush: "—",
            total: 0,
            series: Array(DAYS).fill(0),
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [user]);

  return state;
}
