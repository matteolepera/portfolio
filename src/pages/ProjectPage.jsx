import { IconArrowLeft, IconBrandGithub } from "@tabler/icons-react";
import { Helmet } from "react-helmet-async";
import { Navigate, useParams } from "react-router-dom";
import LapList from "../components/project/LapList";
import StackBadges from "../components/ui/StackBadges";
import { getProject } from "../content/projects";
import useSectionNavigation from "../hooks/useSectionNavigation";
import { useTheme } from "../theme/themeContext";

export default function ProjectPage() {
  const { id } = useParams();
  const project = getProject(id);
  const goToSection = useSectionNavigation();
  const { theme } = useTheme();

  if (!project) return <Navigate to="/" replace />;

  const [cover, ...others] = project.gallery;

  return (
    <>
      <Helmet>
        <title>{`${project.name} | Matteo Le Pera`}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div aria-hidden="true" className="hidden h-24 lg:block" />

      <article className="mx-auto max-w-[1200px] px-5 pt-10 pb-16 md:px-8 md:pt-14 lg:pt-12 lg:pb-24">
        <a
          href="/#progetti"
          onClick={(event) => goToSection(event, "progetti")}
          className="inline-flex items-center gap-2 py-2 font-mono text-[13px] tracking-[0.08em] text-muted uppercase"
        >
          <IconArrowLeft size={16} aria-hidden="true" />
          Torna ai progetti
        </a>

        <header className="mt-6 flex flex-wrap items-end gap-x-10 gap-y-6">
          <div className="min-w-0 flex-[999_1_480px]">
            {theme === "vi" ? (
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-12 items-center justify-center rounded-full bg-hi text-xl font-black text-bg md:size-14 md:text-2xl"
                >
                  {project.name.charAt(0)}
                </span>
                <p className="text-lg font-black text-accent uppercase italic md:text-xl">
                  {project.position === "P1"
                    ? "Missione in corso"
                    : "Missione completata"}
                </p>
              </div>
            ) : (
              <p className="text-5xl leading-none font-extrabold text-accent-text italic [font-stretch:75%] md:text-6xl">
                {project.position}
              </p>
            )}
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

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-accent px-6 font-bold text-on-accent transition-colors duration-500"
            >
              <IconBrandGithub size={20} aria-hidden="true" />
              Codice su GitHub
            </a>
          )}
        </header>

        {project.laps && (
          <section
            aria-label="Evoluzione del progetto"
            className="mt-12 max-w-[70ch]"
          >
            <LapList laps={project.laps} />
          </section>
        )}

        <section
          aria-label="Galleria"
          className="mt-12 grid gap-4 md:grid-cols-2"
        >
          {cover ? (
            <>
              <img
                src={cover.src}
                alt={cover.alt}
                className="h-auto w-full rounded-xl border border-line md:col-span-2"
              />
              {others.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full rounded-xl border border-line"
                />
              ))}
            </>
          ) : (
            <div className="flex aspect-[16/9] items-center justify-center rounded-xl border border-line bg-surface font-mono text-[13px] text-muted md:col-span-2">
              [Screenshot in arrivo]
            </div>
          )}
        </section>
      </article>
    </>
  );
}
