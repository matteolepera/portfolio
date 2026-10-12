import { Helmet } from "react-helmet-async";
import Projects from "../components/home/Projects";
import Hero from "../components/home/Hero";
import Workflow from "../components/home/Workflow";
import About from "../components/home/About";
import Contact from "../components/home/Contact";

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

      <Projects />

      <Workflow />

      <About />

      <Contact />
    </>
  );
}
