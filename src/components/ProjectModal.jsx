import styles from "../styles/Projects.module.css"

export default function ProjectModal({ project, slideIndex, onPrev, onNext, onZoom, onClose }) {
    if (!project) {
        return null
    }

    const image = project.images[slideIndex]

    return (
        <div className={styles.projectModalOverlay} role="dialog" aria-modal="true" aria-label={project.name} onClick={onClose}>
            <div className={styles.projectModal} onClick={(event) => event.stopPropagation()}>
                <button className={styles.projectModalClose} type="button" onClick={onClose} aria-label="Close project">
                    ×
                </button>

                <div className={styles.projectModalHeader}>
                    <h3>{project.name}</h3>
                    <p>{project.role}</p>
                </div>

                <div className={styles.projectCarousel}>
                    <button type="button" className={styles.projectCarouselNav} onClick={onPrev} aria-label="Previous slide">
                        ‹
                    </button>

                    <button type="button" className={styles.projectSlide} onClick={onZoom} aria-label="Open image fullscreen">
                        <span className={styles.projectSlideIndex}>
                            {String(slideIndex + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}
                        </span>
                        <img src={image} alt={`${project.name} screenshot ${slideIndex + 1}`} />
                        <span className={styles.projectSlideHint}>Zoom</span>
                    </button>

                    <button type="button" className={styles.projectCarouselNav} onClick={onNext} aria-label="Next slide">
                        ›
                    </button>
                </div>

                <div className={styles.projectModalDescription}>
                    <span>Description</span>
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    )
}
