export const featuredProject = {
  id: "ferrari-archive",
  position: "P1",
  name: "F******",
  subtitle: "Archivio Ferrari",
  badge: "In sviluppo · nome top secret",
  description:
    "L'archivio tecnico di tutte le Ferrari mai prodotte, dalle stradali alla F1 fino ai prototipi. Niente prezzi, niente vendita: solo storia e dati, organizzati come si deve.",
  role: "Da solo",
  stack: ["Laravel", "React", "Tailwind", "MySQL"],
  image: null,
  laps: [
    {
      id: 1,
      text: "L'idea parte con Node.js e MySQL.",
      short: "Idea in Node.js e MySQL",
    },
    {
      id: 2,
      text: "Rifatto da zero: API REST in Laravel e frontend React in due repository.",
      short: "API Laravel e React separati",
    },
    {
      id: 3,
      text: "Area admin con tre livelli di staff, autenticazione con Sanctum, sito multilingua.",
      short: "Admin, Sanctum e multilingua",
    },
  ],
  linkLabel: "Segui la rivelazione su LinkedIn",
  linkUrl: "https://www.linkedin.com/in/matteo-le-pera/",
  repoUrl: null,
  gallery: [],
  season: "[Anno]",
  duration: "[Durata]",
  team: "Da solo",
  debrief: {
    goal: "[Il problema da risolvere]",
    approach: "[Cosa ho fatto io]",
    challenge: "[La sfida più difficile e come l'ho risolta]",
    learned: "[Cosa ho imparato]",
  },
};

export const projects = [
  {
    id: "focusone",
    position: "P2",
    name: "FocusOne",
    description:
      "App a tema Formula 1: team, piloti e power unit della stagione, con backoffice CRUD protetto e API REST.",
    role: "Full stack",
    stack: ["Laravel", "React"],
    repoUrl: null,
    gallery: [
      {
        src: "/images/focusone/home-desktop.webp",
        label: "Home",
        alt: "Home pubblica di FocusOne",
      },
      {
        src: "/images/focusone/login-backoffice.webp",
        label: "Login",
        alt: "Login del backoffice di FocusOne",
      },
      {
        src: "/images/focusone/dashboard-backoffice.webp",
        label: "Dashboard",
        alt: "Dashboard del backoffice di FocusOne",
      },
    ],
    season: "[Anno]",
    duration: "[Durata]",
    team: "[Da solo o N persone]",
    debrief: {
      goal: "[Il problema da risolvere]",
      approach: "[Cosa ho fatto io]",
      challenge: "[La sfida più difficile e come l'ho risolta]",
      learned: "[Cosa ho imparato]",
    },
  },
  {
    id: "aeterna-skin",
    position: "P3",
    name: "Aeterna Skin",
    description:
      "E-commerce di skincare in team: mockup su Figma, carrello e checkout in React, invio email con Nodemailer.",
    role: "In team",
    stack: ["React", "Node.js"],
    repoUrl: null,
    gallery: [
      {
        src: "/images/aeternaskin/home-desktop.webp",
        label: "Home",
        alt: "Home di Aeterna Skin",
      },
      {
        src: "/images/aeternaskin/popup.webp",
        label: "Popup",
        alt: "Popup di Aeterna Skin",
      },
      {
        src: "/images/aeternaskin/cartpreview.webp",
        label: "Carrello",
        alt: "Anteprima del carrello di Aeterna Skin",
      },
      {
        src: "/images/aeternaskin/checkout.webp",
        label: "Checkout",
        alt: "Checkout di Aeterna Skin",
      },
      {
        src: "/images/aeternaskin/ordine-confermato.webp",
        label: "Ordine",
        alt: "Conferma dell'ordine su Aeterna Skin",
      },
    ],
    season: "[Anno]",
    duration: "[Durata]",
    team: "[N persone]",
    debrief: {
      goal: "[Il problema da risolvere]",
      approach: "[Cosa ho fatto io]",
      challenge: "[La sfida più difficile e come l'ho risolta]",
      learned: "[Cosa ho imparato]",
    },
  },
  {
    id: "trip-and-chill",
    position: "P4",
    name: "Trip&Chill",
    description:
      "Rubrica digitale per accompagnatori di viaggio: filtro per mese, form dei viaggi e menu chiamate di emergenza.",
    role: "Frontend in team",
    stack: ["React"],
    repoUrl: null,
    gallery: [
      {
        src: "/images/tripandchill/desktop_screen.webp",
        label: "Desktop",
        alt: "Trip&Chill su desktop",
      },
      {
        src: "/images/tripandchill/tablet_screen.webp",
        label: "Tablet",
        alt: "Trip&Chill su tablet",
      },
      {
        src: "/images/tripandchill/mobile_screen.webp",
        label: "Telefono",
        alt: "Trip&Chill su telefono",
      },
    ],
    season: "[Anno]",
    duration: "[Durata]",
    team: "[N persone]",
    debrief: {
      goal: "[Il problema da risolvere]",
      approach: "[Cosa ho fatto io]",
      challenge: "[La sfida più difficile e come l'ho risolta]",
      learned: "[Cosa ho imparato]",
    },
  },
];

export const allProjects = [featuredProject, ...projects];

export function getProject(id) {
  return allProjects.find((project) => project.id === id);
}
