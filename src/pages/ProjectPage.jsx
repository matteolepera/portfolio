import { IconArrowLeft, IconCheck } from "@tabler/icons-react";
import { Helmet } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";
import Debrief from "../components/project/Debrief";
import Dossier from "../components/project/Dossier";
import LapList from "../components/project/LapList";
import LoadingCarousel from "../components/project/LoadingCarousel";
import MissionPassed from "../components/project/MissionPassed";
import OnboardCarousel from "../components/project/OnboardCarousel";
import TechSheet from "../components/project/TechSheet";
import StackBadges from "../components/ui/StackBadges";
import { getProject } from "../content/projects";
import useSectionNavigation from "../hooks/useSectionNavigation";
import { useTheme } from "../theme/themeContext";

function ObjectiveList({ laps }) {
  const lastLap = laps.length - 1;

  return (
    <section aria-labelledby="objectives-title" className="mx-auto max-w-xl">
      <h2
        id="objectives-title"
        className="mb-2.5 text-[11px] font-semibold tracking-[0.08em] text-muted uppercase [font-stretch:75%]"
      >
        Obiettivi
      </h2>
      <ol className="flex flex-col gap-2">
        {laps.map((lap, index) => {
          const current = index === lastLap;

          return (
            <li
              key={lap.id}
              className={`flex items-start gap-2.5 ${current ? "font-bold text-[#ffc857]" : "text-muted"}`}
            >
              {current ? (
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-3 shrink-0 border-2 border-current"
                />
              ) : (
                <IconCheck
                  size={16}
                  stroke={3}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#72f1b8]"
                />
              )}
              <span className={current ? "" : "line-through"}>{lap.text}</span>
              <span className="sr-only">
                {current ? "in corso" : "completato"}
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default function ProjectPage() {
  const { id } = useParams();
  const project = getProject(id);
  const goToSection = useSectionNavigation();
  const { theme } = useTheme();

  if (!project) return <Navigate to="/" replace />;

  const isVi = theme === "vi";
  const inProgress = project.position === "P1";

  return (
    <>
      <Helmet>
        <title>{`${project.name} | Matteo Le Pera`}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div aria-hidden="true" className="hidden h-24 lg:block" />

      <article
        key={theme}
        className="mx-auto flex max-w-[1200px] animate-panel-in flex-col gap-10 px-5 pt-10 pb-16 motion-reduce:animate-none md:gap-12 md:px-8 md:pt-14 lg:pt-12 lg:pb-24"
      >
        <a
          href="/#progetti"
          onClick={(event) => goToSection(event, "progetti")}
          className="-mb-4 inline-flex items-center gap-2 self-start py-2 font-mono text-[13px] tracking-[0.08em] text-muted uppercase"
        >
          <IconArrowLeft size={16} aria-hidden="true" />
          {isVi ? "Torna alle missioni" : "Torna ai progetti"}
        </a>

        {isVi ? (
          <>
            <div>
              <MissionPassed project={project} inProgress={inProgress} />
              <StackBadges
                role={project.role}
                stack={project.stack}
                className="mt-5 justify-center"
              />
            </div>
            {project.laps && <ObjectiveList laps={project.laps} />}
            <LoadingCarousel
              images={project.gallery}
              projectName={project.name}
            />
            <Dossier debrief={project.debrief} />
          </>
        ) : (
          <>
            <header className="grid items-end gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10">
              <div className="min-w-0">
                <p className="text-5xl leading-none font-extrabold text-accent-text italic [font-stretch:75%] md:text-6xl">
                  {project.position}
                </p>
                <h1 className="display-title mt-3 text-[clamp(34px,6vw,72px)] leading-[0.95]">
                  {project.name}
                </h1>
                <p className="mt-5 max-w-[60ch] text-lg text-muted lg:text-[19px]">
                  {project.description}
                </p>
                <StackBadges
                  role={project.role}
                  stack={project.stack}
                  className="mt-6"
                />
              </div>
              <TechSheet project={project} />
            </header>
            {project.laps && (
              <section
                aria-label="Evoluzione del progetto"
                className="max-w-[70ch]"
              >
                <LapList laps={project.laps} />
              </section>
            )}
            <OnboardCarousel
              images={project.gallery}
              projectName={project.name}
            />
            <Debrief debrief={project.debrief} />
          </>
        )}
      </article>
    </>
  );
}
