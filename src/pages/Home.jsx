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
            <section className={styles.about} id="about">
                <div className={styles.aboutHeader}>
                    <span>About Me</span>
                    <h2>Formazione</h2>
                </div>

                <div className={styles.aboutGrid}>
                    <article className={styles.timelineColumn}>
                        <div className={styles.timelineBlock}>
                            <h3>Formazione</h3>
                            <ul className={styles.timelineList}>
                                <li>
                                    <strong>Boolean</strong>
                                    <span>Full Stack Web Development</span>
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>

                <table>
                    <caption>Stack Tech</caption>
                    <thead>
                        <tr>
                            <th>1/20</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><img src="." alt="." /></td>
                            <td>JS</td>
                            <td>Leader</td>
                            <td>S</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><img src="." alt="." /></td>
                            <td>HM</td>
                            <td>+1.5</td>
                            <td>M</td>
                        </tr>
                    </tbody>
                </table>
            </section>


        </>

    )
}
