import styles from "../styles/Home.module.css"
import { Helmet } from "react-helmet-async";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Matteo Le Pera | Web dev</title>
                <meta name="description" content="Portfolio di Matteo Le Pera, Junior Full Stack Web Developer. Scopri progetti, competenze e percorso professionale." />
            </Helmet>

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
        </>
    )
}
