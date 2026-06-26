import styles from "../styles/Projects.module.css"

export default function ProjectModal({ project, slideIndex, onPrev, onNext, onZoom, onClose }) {
    if (!project) return null

    const image = project.images[slideIndex]
    const total = project.images.length

    return (
        <div className={styles.projectModalOverlay} role="dialog" aria-modal="true" aria-label={project.name} onClick={onClose}>
            <div className={styles.projectModal} onClick={(e) => e.stopPropagation()}>

                <button className={styles.projectModalClose} type="button" onClick={onClose} aria-label="Chiudi">
                    ×
                </button>

                <div className={styles.projectModalCarousel}>
                    <img src={image} alt={`${project.name} screenshot ${slideIndex + 1}`} onClick={onZoom} />
                    <button type="button" className={`${styles.projectModalNav} ${styles.projectModalNavPrev}`} onClick={onPrev} aria-label="Precedente">‹</button>
                    <button type="button" className={`${styles.projectModalNav} ${styles.projectModalNavNext}`} onClick={onNext} aria-label="Successivo">›</button>
                    <span className={styles.projectModalCounter}>
                        {String(slideIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </span>
                </div>

                <div className={styles.projectModalBody}>
                    <div className={styles.projectModalMeta}>
                        <span className={styles.projectModalRole}>{project.role}</span>
                        <h3 className={styles.projectModalTitle}>{project.name}</h3>
                    </div>
                    <div className={styles.projectModalDivider} />
                    <span className={styles.projectModalDescLabel}>Descrizione</span>
                    <p className={styles.projectModalDesc}>{project.description}</p>
                </div>

            </div>
        </div>
    )
}