import { profile } from "../../content/profile";
import { featuredProject, projects } from "../../content/projects";
import { useTheme } from "../../theme/themeContext";
import SectionHeading from "../ui/SectionHeading";
import FeaturedProject from "./FeaturedProject";
import MissionList from "./MissionList";
import StartingGrid from "./StartingGrid";

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section
      id="progetti"
      className="scroll-mt-6 border-t border-line lg:scroll-mt-[88px]"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20 lg:py-24">
        <SectionHeading
          index="01"
          kicker="Progetti"
          title="Cosa ho costruito"
          action={
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="py-2.5 font-mono text-[13px] tracking-[0.08em] text-muted uppercase"
            >
              Tutti i repository ↗
            </a>
          }
        />

        <FeaturedProject project={featuredProject} />

        <div className="mt-6">
          {theme === "vi" ? (
            <MissionList projects={projects} />
          ) : (
            <StartingGrid projects={projects} />
          )}
        </div>
      </div>
    </section>
  );
}
