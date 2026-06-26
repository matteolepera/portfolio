import styles from "../styles/Projects.module.css"

export default function ProjectCard({ project, onOpen }) {
    return (
        <button className={styles.projectCard} type="button" onClick={onOpen}>
            <div className={styles.projectCardPreview}>
                <img src={project.previewImage} alt={project.name} />
            </div>
            <div className={styles.projectCardContent}>
                <div className={styles.projectCardBody}>
                    <strong className={styles.projectCardName}>{project.name}</strong>
                    <p className={styles.projectCardSummary}>{project.summary}</p>
                </div>
            </div>
        </button>
    )
}
