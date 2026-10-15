export const habits = [
  {
    id: 1,
    title: "Quello che si ripete, lo automatizzo",
    text: "La regola della terza volta: la prima lo faccio a mano, la seconda mi segno cosa si ripete, la terza scrivo il codice.",
    proof:
      "script di scraping con parametri di default, modificabili senza toccare il codice",
  },
  {
    id: 2,
    title: "Ogni pezzo al suo posto",
    text: "Dati e API da una parte, interfaccia dall'altra. Così ognuna cresce senza rompere l'altra.",
    proof: "F******: API Laravel e frontend React in due repository separati",
  },
  {
    id: 3,
    title: "Un passo alla volta, verificato",
    text: "Un branch per ogni parte, controlli automatici prima di ogni commit, poi merge. Se un controllo fallisce, non si va avanti.",
    proof: "formattazione, analisi statica e test su ogni pull request",
  },
  {
    id: 4,
    title: "Funziona? Allora si migliora",
    text: "La prima versione serve a capire il problema. Le successive a risolverlo bene.",
    proof: "questo portfolio, alla terza versione",
  },
];

export const commitTerminal = [
  { id: 1, type: "path", text: "~/f******", branch: "(feature/1.8-seeder)" },
  { id: 2, type: "command", text: "composer check" },
  { id: 3, type: "check", text: "pint      codice formattato" },
  { id: 4, type: "check", text: "larastan  nessun errore" },
  { id: 5, type: "check", text: "test      [n] passati" },
  { id: 6, type: "command", text: 'git commit -m "feat: seeder Ferrari"' },
  { id: 7, type: "command", text: "git push" },
  { id: 8, type: "output", text: "→ pull request → merge su main" },
];

export const terminal = {
  directory: "f******",
  branch: "feature/1.8-seeder",
  lines: [
    { id: 1, type: "prompt", text: "composer check" },
    { id: 2, type: "script", text: "> pint --test" },
    { id: 3, type: "pass", text: "codice formattato" },
    { id: 4, type: "script", text: "> phpstan analyse" },
    { id: 5, type: "ok", text: "Nessun errore" },
    { id: 6, type: "script", text: "> php artisan test" },
    { id: 7, type: "tests", label: "Tests:", text: "48 passed" },
    { id: 8, type: "prompt", text: 'git commit -m "feat: seeder Ferrari"' },
    { id: 9, type: "cursor" },
  ],
};
