import { Helmet } from "react-helmet-async";
import Section from "../components/ui/Section";

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

      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 pt-24 pb-6">
        <section
          id="profilo"
          className="scroll-mt-24 overflow-hidden rounded-xl border border-white/10 bg-card"
        >
          <div className="h-40 bg-linear-to-r from-orange via-pink to-purple sm:h-52" />
          <div className="p-6 text-muted">Profilo: lo costruiamo nella 2.3</div>
        </section>

        <Section
          id="informazioni"
          kicker="Informazioni"
          title="Scheda personaggio"
        >
          <p className="text-muted">In arrivo</p>
        </Section>

        <Section id="missioni" kicker="In evidenza" title="Missioni">
          <p className="text-muted">In arrivo</p>
        </Section>

        <Section
          id="esperienza"
          kicker="Esperienza"
          title="Storia del personaggio"
        >
          <p className="text-muted">In arrivo</p>
        </Section>

        <Section id="competenze" kicker="Competenze" title="Ruota delle armi">
          <p className="text-muted">In arrivo</p>
        </Section>

        <Section id="contatti" kicker="Contatti" title="Telefono">
          <p className="text-muted">In arrivo</p>
        </Section>
      </div>
    </>
  );
}
