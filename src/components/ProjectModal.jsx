import styles from "../styles/Home.module.css"

export default function ProjectModal({ project, slideIndex, onPrev, onNext, onClose }) {
    if (!project) {
        return null
    }

    const slide = project.slides[slideIndex]

    return (
        <div className={styles.projectModalOverlay} role="dialog" aria-modal="true" aria-label={project.name} onClick={onClose}>
            <div className={styles.projectModal} onClick={(event) => event.stopPropagation()}>
                <button className={styles.projectModalClose} type="button" onClick={onClose} aria-label="Close project">
                    ×
                </button>

                <div className={styles.projectModalHeader}>
                    <span>{project.type}</span>
                    <h3>{project.name}</h3>
                    <p>{project.role}</p>
                </div>

                <div className={styles.projectCarousel}>
                    <button type="button" className={styles.projectCarouselNav} onClick={onPrev} aria-label="Previous slide">
                        ‹
                    </button>

                    <div className={styles.projectSlide}>
                        <span className={styles.projectSlideIndex}>
                            {String(slideIndex + 1).padStart(2, "0")} / {String(project.slides.length).padStart(2, "0")}
                        </span>
                        <h4>{slide.title}</h4>
                        <p>{slide.text}</p>

                        <div className={styles.projectStack}>
                            {project.stack.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                    </div>

                    <button type="button" className={styles.projectCarouselNav} onClick={onNext} aria-label="Next slide">
                        ›
                    </button>
                </div>

                <div className={styles.projectModalFooter}>
                    <span>{project.year}</span>
                    <strong>{project.summary}</strong>
                </div>
            </div>
        </div>
    )
}
