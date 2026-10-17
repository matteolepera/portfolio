import { profile } from "../../content/profile";
import { useProjects } from "../../hooks/useProjects";
import { useTheme } from "../../theme/themeContext";
import LoadError from "../ui/LoadError";
import SectionHeading from "../ui/SectionHeading";
import MissionBriefing from "./MissionBriefing";
import MissionList from "./MissionList";
import PolePosition from "./PolePosition";
import ProjectsSkeleton from "./ProjectsSkeleton";
import StartingGrid from "./StartingGrid";

function ProjectsContent({ isVi, featured, others }) {
  if (isVi) {
    return (
      <>
        {featured && <MissionBriefing project={featured} />}
        <div className="mt-6">
          <MissionList projects={others} />
        </div>
      </>
    );
  }

  return (
    <>
      {featured && <PolePosition project={featured} />}
      <div className="mt-3.5">
        <StartingGrid projects={others} />
      </div>
    </>
  );
}

export default function Projects() {
  const { theme } = useTheme();
  const {
    data: projects,
    isPending,
    isError,
    refetch,
    isFetching,
  } = useProjects();

  const featured = projects?.find((project) => project.featured);
  const others = projects?.filter((project) => !project.featured) ?? [];

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

        {isPending && <ProjectsSkeleton />}
        {isError && (
          <LoadError
            message="Non riesco a caricare i progetti in questo momento."
            onRetry={refetch}
            retrying={isFetching}
          />
        )}
        {projects && (
          <ProjectsContent
            isVi={theme === "vi"}
            featured={featured}
            others={others}
          />
        )}
      </div>
    </section>
  );
}
