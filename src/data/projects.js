export const projects = [
    {
        id: 1,
        name: "FocusOne",
        type: "full stack",
        role: "Full Stack Developer",
        summary: "Ho progettato e sviluppato un'applicazione full-stack a tema Formula 1.",
        description: "FocusOne è stato pensato con l'obiettivo di offrire una piattaforma che raccoglie e presenta in modo chiaro e interattivo i dati della stagione corrente: team, piloti, power unit e specifiche tecniche delle vetture. Il backoffice in Laravel, protetto da autenticazione, permette la gestione completa di tutte e 4 le entità tramite interfacce CRUD dedicate. Il frontend in React offre homepage, pagine index e pagine di dettaglio per team e piloti — con URL basati su slug per una maggiore sicurezza e leggibilità — e comunica con il backend tramite API REST.",
        stack: ["PHP", "Laravel", "MySQL", "JavaScript", "React", "HMTL", "CSS"],
        previewImage: "/images/focusone/home-desktop.png",
        images: [
            "/images/focusone/login-backoffice.png",
            "/images/focusone/dashboard-backoffice.png",
        ],
    },
    {
        id: 2,
        name: "Aeterna Skin",
        type: "full stack",
        role: "Full Stack Developer",
        summary: "Ho contribuito allo sviluppo full-stack di Aeterna Skin, un e-commerce di skincare realizzato in team",
        description: "Ho curato la progettazione iniziale del mockup su Figma, traducendo la vision del brand in un layout coerente, partendo sviluppando il mockup su Figma, per poi sviluppare lato frontend il popup di benvenuto, il componente cart preview per la visualizzazione rapida del carrello, le pagine di checkout e conferma ordine. Lato backend invece mi sono occupato della validazione dei dati in entrata, configurazione del sistema di invio email tramite Nodemailer e la risoluzione di bug legati all'invio delle email.",
        stack: ["Express.js", "Node.js", "MySQL", "React", "JavaScript", "HTML", "CSS"],
        previewImage: "/images/aeternaskin/home-desktop.png",
        images: [
            "/images/aeternaskin/popup.png",
            "/images/aeternaskin/cartpreview.png",
            "/images/aeternaskin/checkout.png",
            "/images/aeternaskin/ordine-confermato.png",
        ],
    },

    {
        id: 3,
        name: "Trip&Chill",
        type: "frontend",
        role: "Frontend Developer",
        summary: "Ho contribuito allo sviluppo di Trip&Chill, una rubrica digitale pensata per il team di accompagnatori.",
        description: "Mi sono occupato della UI/UX e di alcune funzionalità chiave come un filtro dinamico per mese nella homepage, un form per l'inserimento di nuovi viaggi e un modal dedicato al menù chiamate di emergenza.",
        stack: ["JavaScript", "React", "Bootstrap", "CSS"],
        previewImage: "/images/tripandchill/desktop_screen.png",
        images: [
            "/images/tripandchill/mobile_screen.png",
            "/images/tripandchill/tablet_screen.png",
        ],
    },
];
