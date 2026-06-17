import styles from "../styles/Home.module.css"

export default function ProjectCard({ project, onOpen }) {
    return (
        <button className={styles.projectCard} type="button" onClick={onOpen}>
            <span className={styles.projectCardBadge}>{project.type}</span>
            <strong className={styles.projectCardName}>{project.name}</strong>
            <span className={styles.projectCardMeta}>{project.year}</span>
            <p className={styles.projectCardSummary}>{project.summary}</p>
            <span className={styles.projectCardAction}>Open project</span>
        </button>
    )
}
