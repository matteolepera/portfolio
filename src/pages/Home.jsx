import styles from "../styles/Home.module.css"

const stackTechnologies = [
    { position: 1, logo: "php", code: "PHP", interval: "Leader", tyres: "soft", logoColor: "#777bb3" },
    { position: 2, logo: "laravel", code: "LAR", interval: "+0.284", tyres: "medium", logoColor: "#ff2d20" },
    { position: 3, logo: "javascript", code: "JAV", interval: "+0.612", tyres: "soft", logoColor: "#f7df1e", logoForeground: "#111111" },
    { position: 4, logo: "react", code: "REA", interval: "+0.944", tyres: "medium", logoColor: "#61dafb", logoForeground: "#111111" },
    { position: 5, logo: "bootstrap", code: "BOO", interval: "+1.288", tyres: "hard", logoColor: "#7952b3" },
    { position: 6, logo: "nodejs", code: "NOD", interval: "+1.633", tyres: "hard", logoColor: "#3c873a" },
    { position: 7, logo: "expressjs", code: "EXP", interval: "+1.981", tyres: "medium", logoColor: "#1f1f1f" },
    { position: 8, logo: "html", code: "HTM", interval: "+2.315", tyres: "soft", logoColor: "#e34f26" },
    { position: 9, logo: "css", code: "CSS", interval: "+2.704", tyres: "medium", logoColor: "#1572b6" },
    { position: 10, logo: "mysql", code: "SQL", interval: "+3.011", tyres: "hard", logoColor: "#4479a1" },
]

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
            <section className={styles.about} id="about">
                <div className={styles.aboutLayout}>
                    <div className={styles.aboutHeader}>
                        <span>About Me</span>
                    </div>

                    <article className={styles.timelineColumn}>
                        <p className={styles.aboutIntro}>
                            Ciao, sono Matteo, Junior Full Stack Web Developer con una naturale
                            predisposizione al lavoro di squadra e al miglioramento costante.
                            Mi distinguo per organizzazione, precisione e capacità di adattamento
                            in contesti dinamici.
                        </p>

                        <div className={styles.timelineListsGrid}>
                            <div className={styles.timelineBlock}>
                                <h3>Academy</h3>
                                <ul className={styles.timelineList}>
                                    <li>
                                        <strong>Master, Web Developer</strong>
                                        <span>Percorso intensivo di sviluppo web full stack con realizzazione di
                                            applicazioni complete, lavorando su progetti individuali e di team
                                            in contesto strutturato.</span>
                                    </li>
                                    <li>
                                        <strong>Diploma Istituto Tecnico, Informatica</strong>
                                        <span>Durante il percorso ho acquisito le basi di programmazione e
                                            sviluppo web.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.timelineBlock}>
                                <h3>Pit Stop</h3>
                                <ul className={styles.timelineList}>
                                    <li>
                                        <strong>Addetto Vendite</strong>
                                        <span>Esperienza che ha consolidato comunicazione, orientamento al risultato e gestione degli obiettivi.</span>
                                    </li>
                                    <li>
                                        <strong>Servizio Civile Universale</strong>
                                        <span>Esperienza che ha rafforzato precisione, organizzazione e responsabilità.</span>
                                    </li>
                                    <li>
                                        <strong>Crew Member</strong>
                                        <span>Esperienza che mi ha insegnato disciplina, velocità decisionale e lavoro di squadra.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.targetBlock}>
                            <h3>Target</h3>
                            <p className={styles.targetText}>
                                Cerco realtà in cui poter crescere, mettermi alla prova e contribuire
                                attivamente allo sviluppo di soluzioni efficaci e ben strutturate.
                            </p>
                        </div>
                    </article>

                    <table className={styles.leaderboard}>
                        <caption>Stack Tech</caption>
                        <thead>
                            <tr>
                                <th colSpan="5">16/53</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stackTechnologies.map((stack) => (
                                <tr key={stack.position}>
                                    <td>{stack.position}</td>
                                    <td>
                                        <img
                                            src={`/images/stack/${stack.logo}.png`}
                                            alt={stack.logo}
                                        />
                                    </td>
                                    <td>{stack.code}</td>
                                    <td>{stack.interval}</td>
                                    <td>
                                        <img
                                            src={`/images/tyres/${stack.tyres}.png`}
                                            alt={stack.tyres}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>


            {/* Projects */}
            <section className={styles.about}>
                <h2>Progetti</h2>

            </section>


        </>

    )
}
