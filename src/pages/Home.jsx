import { Helmet } from "react-helmet-async";
import { sectors } from "../content/sectors";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Matteo Le Pera | Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio di Matteo Le Pera, Full Stack Developer: progetti, esperienze e competenze."
        />
      </Helmet>

      <div aria-hidden="true" className="hidden h-24 lg:block" />

      <Hero />

      {sectors.map((sector) => (
        <section
          key={sector.id}
          id={sector.id}
          className="min-h-screen scroll-mt-[88px] border-t border-line"
        >
          <div className="mx-auto max-w-[1200px] px-8 py-24">
            <p className="font-mono text-sm tracking-[0.12em] text-accent-text uppercase">
              {sector.code} — {sector.label}
            </p>
            <h2 className="display-title mt-3.5 text-5xl">In arrivo</h2>
          </div>
        </section>
      ))}
    </>
  );
}
