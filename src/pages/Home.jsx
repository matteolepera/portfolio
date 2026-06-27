import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.hero} id="home">
            <div className={styles.sectionInner}>
                <div className={styles.heroContent}>
                    <h1>
                        <span>Ciao. Sono Matteo.</span>
                        <span>Creo siti web.</span>
                    </h1>
                    <div className={styles.heroDescription}>
                        <p>
                            Creo interfacce pulite e funzionali, con attenzione ai dettagli.<br />E quando serve, anche con un po’ di personalità.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
