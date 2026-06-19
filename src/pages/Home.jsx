import { useEffect, useState } from "react"
import styles from "../styles/Home.module.css"
import { stackTechnologies } from "../data/stackTechnologies.js";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx"
import ProjectModal from "../components/ProjectModal.jsx"


export default function Home() {
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

        setSlideIndex((currentSlide) =>
            (currentSlide + 1) % activeProject.images.length,
        )
    }

    const openImageZoom = () => {
        if (!activeProject) {
            return
        }

        setZoomedImage(activeProject.images[slideIndex])
    }

    const contactLinks = [
        { label: "CV", href: "#cv" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/matteo-le-pera" },
        { label: "GitHub", href: "https://github.com/matteolepera" },
    ]

    return (
        <>
            {/* Hero */}
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <span>
                        LIGHTS OUT
                    </span>

                    <h1>
                        WEB DEVELOPER
                    </h1>

                    <p>
                        Matteo Le Pera
                    </p>
                </div>
            </div>
            {/* About Me */}
            <section className={styles.about} id="about">
                <div className={styles.aboutLayout}>
                    <div className={styles.aboutHeader}>
                        <span>About Me</span>
                    </div>

                    <article className={styles.timelineColumn}>
                        <p className={styles.aboutIntro}>
                            Ciao, sono Matteo, Junior Full Stack Web Developer con una naturale
                            predisposizione al lavoro di squadra e al miglioramento costante.
                            Mi distinguo per organizzazione, precisione e capacità di adattamento
                            in contesti dinamici.
                        </p>

                        <div className={styles.timelineListsGrid}>
                            <div className={styles.timelineBlock}>
                                <h3>Academy</h3>
                                <ul className={styles.timelineList}>
                                    <li>
                                        <strong>Master, Web Developer</strong>
                                        <span>Percorso intensivo di sviluppo web full stack con realizzazione di
                                            applicazioni complete, lavorando su progetti individuali e di team
                                            in contesto strutturato.</span>
                                    </li>
                                    <li>
                                        <strong>Diploma Istituto Tecnico, Informatica</strong>
                                        <span>Durante il percorso ho acquisito le basi di programmazione e
                                            sviluppo web.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.timelineBlock}>
                                <h3>Pit Stop</h3>
                                <ul className={styles.timelineList}>
                                    <li>
                                        <strong>Addetto Vendite</strong>
                                        <span>Esperienza che ha consolidato comunicazione, orientamento al risultato e gestione degli obiettivi.</span>
                                    </li>
                                    <li>
                                        <strong>Servizio Civile Universale</strong>
                                        <span>Esperienza che ha rafforzato precisione, organizzazione e responsabilità.</span>
                                    </li>
                                    <li>
                                        <strong>Crew Member</strong>
                                        <span>Esperienza che mi ha insegnato disciplina, velocità decisionale e lavoro di squadra.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.targetBlock}>
                            <h3>Target</h3>
                            <p className={styles.targetText}>
                                Cerco realtà in cui poter crescere, mettermi alla prova e contribuire
                                attivamente allo sviluppo di soluzioni efficaci e ben strutturate.
                            </p>
                        </div>
                    </article>

                    <table className={styles.leaderboard}>
                        <caption>Stack Tech</caption>
                        <thead>
                            <tr>
                                <th colSpan="5">16/53</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stackTechnologies.map((stack) => (
                                <tr key={stack.position}>
                                    <td>{stack.position}</td>
                                    <td>
                                        <img
                                            src={`/images/stack/${stack.logo}.png`}
                                            alt={stack.logo}
                                        />
                                    </td>
                                    <td>{stack.code}</td>
                                    <td>{stack.interval}</td>
                                    <td style={{ color: `${stack.tyresColor}80` }}>
                                        {stack.tyres}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>


            {/* Projects */}
            <section className={styles.projectsSection} id="projects">
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
            </section>

            <section className={styles.contactsSection} id="contacts">
                <div className={styles.contactsHeader}>
                    <span>Contacts</span>
                    <p>Trovi qui i canali principali per contattarmi o approfondire il profilo.</p>
                </div>

                <div className={styles.contactsGrid}>
                    {/* CV */}
                    <a className={styles.contactCard} href={"/cv/Matteo.LePeraV6.pdf"} download="Matteo.LePeraV6.pdf">
                        <strong>CV</strong>
                        <span className={styles.contactCardArrow} aria-hidden="true">↗</span>
                    </a>
                    {/* Linkedin */}
                    <a className={styles.contactCard} href={"https://www.linkedin.com/in/matteo-le-pera/"}>
                        <strong>Linkedin</strong>
                        <span className={styles.contactCardArrow} aria-hidden="true">↗</span>
                    </a>
                    {/* GitHub */}
                    <a className={styles.contactCard} href={"https://github.com/matteolepera"}>
                        <strong>GitHub</strong>
                        <span className={styles.contactCardArrow} aria-hidden="true">↗</span>
                    </a>
                </div>
            </section>

            <ProjectModal
                project={activeProject}
                slideIndex={slideIndex}
                onPrev={previousSlide}
                onNext={nextSlide}
                onZoom={openImageZoom}
                onClose={closeProject}
            />

            {zoomedImage ? (
                <div className={styles.projectZoomOverlay} role="dialog" aria-modal="true" aria-label="Project image zoom" onClick={() => setZoomedImage(null)}>
                    <button className={styles.projectZoomClose} type="button" onClick={() => setZoomedImage(null)} aria-label="Close zoom">
                        ×
                    </button>
                    <img src={zoomedImage} alt="Project zoomed view" onClick={(event) => event.stopPropagation()} />
                </div>
            ) : null}

        </>

    )
}
