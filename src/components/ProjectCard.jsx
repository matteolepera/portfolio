import styles from "../styles/Projects.module.css"

export default function ProjectCard({ project, onOpen }) {
    return (
        <button className={styles.projectCard} type="button" onClick={onOpen}>
            <div className={styles.projectCardPreview}>
                <img src={project.previewImage} alt={project.name} />
            </div>
            <span className={styles.projectCardBadge}>{project.type}</span>
            <strong className={styles.projectCardName}>{project.name}</strong>
            <div className={styles.projectCardStack}>
                {project.stack.map((item) => (
                    <span key={item} className={styles.projectCardStackBadge}>
                        {item}
                    </span>
                ))}
            </div>
            <p className={styles.projectCardSummary}>{project.summary}</p>
            <span className={styles.projectCardAction}>
                <span>View details</span>
                <span aria-hidden="true" className={styles.projectCardArrow}>→</span>
            </span>
        </button>
    )
}
