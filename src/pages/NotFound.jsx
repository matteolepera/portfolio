import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTheme } from "../theme/themeContext";

const BUTTON =
  "mt-8 inline-flex min-h-[52px] items-center rounded-full bg-accent px-7 font-bold text-on-accent transition-colors duration-500";

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <>
      <Helmet>
        <title>Pagina non trovata | Matteo Le Pera</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div aria-hidden="true" className="hidden h-24 lg:block" />

      <section className="mx-auto flex min-h-[60vh] max-w-[1200px] flex-col items-center justify-center px-5 py-16 text-center md:px-8">
        {theme === "vi" ? (
          <>
            <h1 className="text-[clamp(44px,11vw,104px)] leading-[0.9] font-black text-accent uppercase italic">
              Missione
              <br />
              fallita
            </h1>
            <p className="mt-5 text-muted md:text-lg">
              Motivo: la pagina non esiste.
            </p>
            <Link to="/" className={BUTTON}>
              Riprova la missione
            </Link>
          </>
        ) : (
          <>
            <p className="bg-accent px-2 py-0.5 text-xs font-semibold tracking-[0.08em] text-on-accent uppercase [font-stretch:75%]">
              DNF · 404
            </p>
            <h1 className="display-title mt-5 text-[clamp(44px,10vw,96px)] leading-none">
              Fuori pista
            </h1>
            <p className="mt-4 text-muted md:text-lg">
              La pagina che cerchi è finita nella ghiaia.
            </p>
            <Link to="/" className={BUTTON}>
              Rientra ai box
            </Link>
            <div
              aria-hidden="true"
              className="mt-12 h-10 w-full max-w-md rounded-full opacity-70"
              style={{
                background:
                  "radial-gradient(circle, var(--line) 1.5px, transparent 2px) 0 0 / 10px 10px",
              }}
            />
          </>
        )}
      </section>
    </>
  );
}
