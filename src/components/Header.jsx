import { useEffect, useState } from "react";

const links = [
  { href: "/#profilo", label: "Profilo", number: "01" },
  { href: "/#missioni", label: "Missioni", number: "02" },
  { href: "/#esperienza", label: "Esperienza", number: "03" },
  { href: "/#competenze", label: "Competenze", number: "04" },
  { href: "/#contatti", label: "Contatti", number: "05" },
];

const socials = [
  { href: "https://www.linkedin.com/in/matteo-le-pera/", label: "LinkedIn" },
  { href: "https://github.com/matteolepera", label: "GitHub" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          solid
            ? "border-white/10 bg-night/80 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
          aria-label="Navigazione principale"
        >
          <a
            href="/#profilo"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <span className="bg-linear-to-br from-orange via-pink to-purple bg-clip-text font-display text-3xl leading-none text-transparent">
              MLP
            </span>
            <span className="hidden text-[10px] leading-tight font-semibold tracking-[0.3em] text-muted uppercase sm:block">
              Full Stack
              <br />
              Developer
            </span>
          </a>

          <div className="flex items-center gap-3">
            <span
              className="hidden tracking-widest text-gold md:block"
              aria-label="Livello di ricercato: cinque stelle"
            >
              ★★★★★
            </span>

            <a
              href="/cv/Matteo.LePeraV6.pdf"
              download
              className="rounded-full bg-pink px-5 py-2 text-sm font-bold tracking-wide text-night uppercase transition-colors hover:bg-orange"
            >
              Scarica CV
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="menu-principale"
              aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-pink"
            >
              <span
                className={`absolute h-0.5 w-5 bg-ink transition-transform duration-300 ${
                  menuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 bg-ink transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 bg-ink transition-transform duration-300 ${
                  menuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        id="menu-principale"
        inert={!menuOpen}
        className={`fixed inset-0 z-40 bg-night transition-opacity duration-500 ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-linear-to-br from-purple/40 via-night to-pink/20"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-between px-4 pt-28 pb-10 sm:px-6">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-baseline gap-4"
                >
                  <span className="text-sm font-semibold text-orange">
                    {link.number}
                  </span>
                  <span className="font-display text-5xl text-ink uppercase transition duration-300 group-hover:translate-x-2 group-hover:text-pink sm:text-7xl">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-end justify-between gap-6 text-sm text-muted">
            <p>
              <span className="block text-xs tracking-[0.3em] text-orange uppercase">
                Stato
              </span>
              Disponibile da subito · Cosenza, ibrido o remoto
            </p>

            <ul className="flex gap-6">
              {socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-pink"
                  >
                    {social.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
