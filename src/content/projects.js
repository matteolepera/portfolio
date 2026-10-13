export const featuredProject = {
  id: "ferrari-archive",
  name: "F******",
  badge: "In sviluppo · nome top secret",
  description:
    "L'archivio tecnico di tutte le Ferrari mai prodotte, dalle stradali alla F1 fino ai prototipi. Niente prezzi, niente vendita: solo storia e dati, organizzati come si deve.",
  role: "Da solo",
  stack: ["Laravel", "React", "Tailwind", "MySQL"],
  image: null,
  laps: [
    { id: 1, text: "L'idea parte con Node.js e MySQL." },
    {
      id: 2,
      text: "Rifatto da zero: API REST in Laravel e frontend React in due repository.",
    },
    {
      id: 3,
      text: "Area admin con tre livelli di staff, autenticazione con Sanctum, sito multilingua.",
    },
  ],
  linkLabel: "Segui la rivelazione su LinkedIn",
  linkUrl: "https://www.linkedin.com/in/matteo-le-pera/",
};

export const projects = [
  {
    id: "focusone",
    name: "FocusOne",
    description:
      "App a tema Formula 1: team, piloti e power unit della stagione, con backoffice CRUD protetto e API REST.",
    role: "Full stack",
    stack: ["Laravel", "React"],
    demoUrl: null,
    codeUrl: null,
  },
  {
    id: "aeterna-skin",
    name: "Aeterna Skin",
    description:
      "E-commerce di skincare in team: mockup su Figma, carrello e checkout in React, invio email con Nodemailer.",
    role: "In team",
    stack: ["React", "Node.js"],
    demoUrl: null,
    codeUrl: null,
  },
  {
    id: "trip-and-chill",
    name: "Trip&Chill",
    description:
      "Rubrica digitale per accompagnatori di viaggio: filtro per mese, form dei viaggi e menu chiamate di emergenza.",
    role: "In team",
    stack: ["React", "BootStrap"],
    demoUrl: null,
    codeUrl: null,
  },
];
