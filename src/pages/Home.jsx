import { Helmet } from "react-helmet-async";
import Projects from "../components/home/Projects";
import Hero from "../components/home/Hero";
import Workflow from "../components/home/Workflow";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  // Arrivando da un'altra pagina, scorre fino alla sezione richiesta
  useEffect(() => {
    const section = location.state?.section ?? location.hash.slice(1);
    if (!section) return;

    const frame = requestAnimationFrame(() => {
      if (section === "top") window.scrollTo({ top: 0 });
      else document.getElementById(section)?.scrollIntoView({ block: "start" });

      if (location.hash) window.history.replaceState(null, "", "/");
    });

    return () => cancelAnimationFrame(frame);
  }, [location.state, location.hash]);

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

      <Projects />

      <Workflow />

      <About />

      <Contact />
    </>
  );
}
