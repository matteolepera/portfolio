import { profile } from "../../content/profile";
import { featuredProject, projects } from "../../content/projects";
import SectionHeading from "../ui/SectionHeading";
import FeaturedProject from "./FeaturedProject";
import ProjectRow from "./ProjectRow";

export default function Projects() {
  return (
    <section
      id="progetti"
      className="scroll-mt-6 lg:scroll-mt-[88px] border-t border-line"
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

        <div className="mt-4 border-t border-line">
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
