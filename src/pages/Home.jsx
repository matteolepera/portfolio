import styles from "../styles/Home.module.css"

const createLogo = (text, background, foreground = "#ffffff") => {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="14" fill="${background}"/>
            <text x="32" y="38" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="24" font-weight="800" fill="${foreground}">${text}</text>
        </svg>
    `

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

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
                        <h2>Formazione</h2>
                    </div>

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

                    <table className={styles.leaderboard}>
                        <caption>Stack Tech</caption>
                        <thead>
                            <tr>
                                <th colSpan="5">1/20</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><img src="/images/js.png" alt="JavaScript" /></td>
                                <td>JS</td>
                                <td>Leader</td>
                                <td><img src="/images/soft-symbol.png" alt="Soft tyres symbol" /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><img src="/images/react.png" alt="React" /></td>
                                <td>REA</td>
                                <td>+1.500</td>
                                <td><img src="/images/medium-symbol.png" alt="Soft tyres symbol" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>


        </>

    )
}
