import { useEffect, useState } from "react"
import styles from "../styles/Home.module.css"
import { projects } from "../data/projects.js"
import ProjectCard from "../components/ProjectCard.jsx"
import ProjectModal from "../components/ProjectModal.jsx"

export default function Projects() {
    const [activeProjectIndex, setActiveProjectIndex] = useState(null)
    const [slideIndex, setSlideIndex] = useState(0)
    const [zoomedImage, setZoomedImage] = useState(null)

    const activeProject = activeProjectIndex === null ? null : projects[activeProjectIndex]

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!activeProject) {
                return
            }

            if (event.key === "Escape") {
                setZoomedImage(null)
                setActiveProjectIndex(null)
                setSlideIndex(0)
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [activeProject])

    const openProject = (index) => {
        setActiveProjectIndex(index)
        setSlideIndex(0)
        setZoomedImage(null)
    }

    const closeProject = () => {
        setZoomedImage(null)
        setActiveProjectIndex(null)
        setSlideIndex(0)
    }

    const previousSlide = () => {
        if (!activeProject) {
            return
        }

        setSlideIndex((currentSlide) =>
            currentSlide === 0 ? activeProject.images.length - 1 : currentSlide - 1,
        )
    }

    const nextSlide = () => {
        if (!activeProject) {
            return
        }

        setSlideIndex((currentSlide) => (currentSlide + 1) % activeProject.images.length)
    }

    const openImageZoom = () => {
        if (!activeProject) {
            return
        }

        setZoomedImage(activeProject.images[slideIndex])
    }

    return (
        <section className={styles.projectsSection} id="projects">
            <div className={styles.sectionInner}>
                <div className={styles.projectsHeader}>
                    <span>Projects</span>
                    <p>Seleziona un progetto per aprire la scheda dettagliata.</p>
                </div>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onOpen={() => openProject(index)}
                        />
                    ))}
                </div>
            </div>

            <ProjectModal
                project={activeProject}
                slideIndex={slideIndex}
                onPrev={previousSlide}
                onNext={nextSlide}
                onZoom={openImageZoom}
                onClose={closeProject}
            />

            {zoomedImage ? (
                <div
                    className={styles.projectZoomOverlay}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Project image zoom"
                    onClick={() => setZoomedImage(null)}
                >
                    <button
                        className={styles.projectZoomClose}
                        type="button"
                        onClick={() => setZoomedImage(null)}
                        aria-label="Close zoom"
                    >
                        ×
                    </button>
                    <img
                        src={zoomedImage}
                        alt="Project zoomed view"
                        onClick={(event) => event.stopPropagation()}
                    />
                </div>
            ) : null}
        </section>
    )
}
