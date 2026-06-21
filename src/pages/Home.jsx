import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.hero} id="home">
            <div className={styles.sectionInner}>
                <div className={styles.heroContent}>
                    <h1>
                        <span>Ciao. Sono Matteo.</span>
                        <span>Sviluppatore Web.</span>
                    </h1>
                    <div className={styles.heroDescription}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
