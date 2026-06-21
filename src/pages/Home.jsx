import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.hero} id="home">
            <div className={styles.sectionInner}>
                <div className={styles.heroContent}>
                    <span>LIGHTS OUT</span>
                    <h1>WEB DEVELOPER</h1>
                    <p>Matteo Le Pera</p>
                </div>
            </div>
        </div>
    )
}
