import styles from "../styles/About.module.css"
import { stackTechnologies } from "../data/stackTechnologies.js"

export default function About() {
    return (
        <section className={styles.about} id="about">
            <div className={styles.sectionInner}>
                <div className={styles.aboutLayout}>
                    <div className={styles.aboutHeader}>
                        <span>Bio</span>
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
                                        <span>
                                            Percorso intensivo di sviluppo web full stack con realizzazione di
                                            applicazioni complete, lavorando su progetti individuali e di team
                                            in contesto strutturato.
                                        </span>
                                    </li>
                                    <li>
                                        <strong>Diploma Istituto Tecnico, Informatica</strong>
                                        <span>Durante il percorso ho acquisito le basi di programmazione e sviluppo web.</span>
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
                                        <img src={`/images/stack/${stack.logo}.png`} alt={stack.logo} />
                                    </td>
                                    <td>{stack.code}</td>
                                    <td>{stack.interval}</td>
                                    <td style={{ color: `${stack.tyresColor}80` }}>{stack.tyres}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
