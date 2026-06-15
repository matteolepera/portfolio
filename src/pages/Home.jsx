import styles from "../styles/Home.module.css"

export default function Home() {
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
            <section>
                <h2>About Me</h2>
                <div>
                    <div>
                        <h3>Formazione</h3>
                        <ul>
                            <li>Boolean</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Progetti</h3>
                        <ul>
                            <li>Focus One</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Esperienze</h3>
                        <ul>
                            <li>Decathlon</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>

    )
}