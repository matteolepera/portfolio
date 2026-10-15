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
    { id: 1, text: "L'idea parte con Node.js e MySQL.", short: "Idea in Node.js e MySQL" },
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
  position: "P1",
  repoUrl: null,
  gallery: [],
};

export const projects = [
  {
    id: "focusone",
    name: "FocusOne",
    description:
      "App a tema Formula 1: team, piloti e power unit della stagione, con backoffice CRUD protetto e API REST.",
    role: "Full stack",
    stack: ["Laravel", "React"],
    position: "P2",
    repoUrl: null,
    gallery: [
      {
        src: "/images/focusone/home-desktop.webp",
        alt: "Home pubblica di FocusOne",
      },
      {
        src: "/images/focusone/login-backoffice.webp",
        alt: "Login del backoffice di FocusOne",
      },
      {
        src: "/images/focusone/dashboard-backoffice.webp",
        alt: "Dashboard del backoffice di FocusOne",
      },
    ],
  },
  {
    id: "aeterna-skin",
    name: "Aeterna Skin",
    description:
      "E-commerce di skincare in team: mockup su Figma, carrello e checkout in React, invio email con Nodemailer.",
    role: "In team",
    stack: ["React", "Node.js"],
    position: "P3",
    repoUrl: null,
    gallery: [
      {
        src: "/images/aeternaskin/home-desktop.webp",
        alt: "Home di Aeterna Skin",
      },
      { src: "/images/aeternaskin/popup.webp", alt: "Popup di Aeterna Skin" },
      {
        src: "/images/aeternaskin/cartpreview.webp",
        alt: "Anteprima del carrello di Aeterna Skin",
      },
      {
        src: "/images/aeternaskin/checkout.webp",
        alt: "Checkout di Aeterna Skin",
      },
      {
        src: "/images/aeternaskin/ordine-confermato.webp",
        alt: "Conferma dell'ordine su Aeterna Skin",
      },
    ],
  },
  {
    id: "trip-and-chill",
    name: "Trip&Chill",
    description:
      "Rubrica digitale per accompagnatori di viaggio: filtro per mese, form dei viaggi e menu chiamate di emergenza.",
    role: "In team",
    stack: ["React", "BootStrap"],
    position: "P4",
    repoUrl: null,
    gallery: [
      {
        src: "/images/tripandchill/desktop_screen.webp",
        alt: "Trip&Chill su desktop",
      },
      {
        src: "/images/tripandchill/tablet_screen.webp",
        alt: "Trip&Chill su tablet",
      },
      {
        src: "/images/tripandchill/mobile_screen.webp",
        alt: "Trip&Chill su telefono",
      },
    ],
  },
];

export const allProjects = [featuredProject, ...projects];

export function getProject(id) {
  return allProjects.find((project) => project.id === id);
}
