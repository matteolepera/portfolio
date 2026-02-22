import styles from "../styles/MaintenanceStyle.module.css"

export default function Maintenance() {
    return (
        <div className={styles.wrapper}>

            <div className={styles.bg} />
            <div className={styles.glare} />

            {/* Header */}
            <header className={styles.header}>
                <span className={styles.logo}>Matteo Le Pera</span>
            </header>

            {/* Main */}
            <main className={styles.main}>
                <p className={styles.eyebrow}>— In arrivo</p>

                <h1 className={styles.title}>
                    <span className={styles.titleTop}>Coming</span>
                    <span className={styles.titleBottom}>Soon.</span>
                </h1>

                <div className={styles.divider} />

                <p className={styles.sub}>Qualcosa di bello sta per arrivare</p>

                <span className={styles.raceNumber} aria-hidden="true">16</span>
            </main>

            {/* Footer */}
            <footer className={styles.footer}>
                <span className={styles.footerLeft}>© {new Date().getFullYear()}</span>
                <span className={styles.footerRight}>MALP</span>
            </footer>

        </div>
    )
}