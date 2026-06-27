import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.hero} id="home">
            <div className={styles.sectionInner}>
                <div className={styles.heroContent}>
                    <h1>
                        <span>Ciao, Sono Matteo.</span>
                        <span>E Faccio siti.</span>
                    </h1>
                    <div className={styles.heroDescription}>
                        <p>
                            Non sono solo bravo, sono anche simpatico.
                            ci provo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
