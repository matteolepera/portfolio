import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import styles from "../styles/Header.module.css"

const navigationItems = [
    { to: "/", label: "Pit Lane", end: true },
    { to: "/bio", label: "Bio" },
    { to: "/box", label: "Box" },
]

const contactLinks = [
    { label: "CV", href: "/cv/Matteo.LePeraV6.pdf", download: "Matteo.LePeraV6.pdf" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/matteo-le-pera/", target: "_blank", rel: "noreferrer" },
    { label: "GitHub", href: "https://github.com/matteolepera", target: "_blank", rel: "noreferrer" },
]

export default function Header() {
    const [contactsOpen, setContactsOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setContactsOpen(false)
    }, [location.pathname])

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setContactsOpen(false)
            }
        }

        if (contactsOpen) {
            document.body.style.overflow = "hidden"
            window.addEventListener("keydown", handleKeyDown)
        }

        return () => {
            document.body.style.overflow = ""
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [contactsOpen])

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.headerNav} aria-label="Main navigation">
                    {navigationItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.end}
                            className={({ isActive }) =>
                                `${styles.headerLink} ${isActive ? styles.headerLinkActive : ""}`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}

                    <button
                        type="button"
                        className={`${styles.headerLink} ${styles.headerButton}`}
                        onClick={() => setContactsOpen((currentValue) => !currentValue)}
                    >
                        Radio
                    </button>
                </nav>
            </header>


            {contactsOpen ? (
                <div
                    className={styles.contactsShell}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Contacts"
                    onClick={() => setContactsOpen(false)}
                >
                    <aside className={styles.contactsPanel} onClick={(e) => e.stopPropagation()}>

                        <div className={styles.contactsPanelHeader}>
                            <span className={styles.contactsPanelNumber}>16</span>
                            <div className={styles.contactsPanelTitleBlock}>
                                <span className={styles.contactsPanelName}>Le Pera</span>
                                <span className={styles.contactsPanelSub}>Team Radio</span>
                            </div>
                            <button
                                type="button"
                                className={styles.contactsClose}
                                onClick={() => setContactsOpen(false)}
                                aria-label="Chiudi"
                            >
                                ×
                            </button>
                        </div>

                        <div className={styles.contactsPanelBody}>
                            <p className={styles.contactsPanelQuote}>
                                Trovi qui i canali principali per contattarmi o scaricare il CV
                            </p>
                            <div className={styles.contactsPanelLinks}>
                                {contactLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        className={styles.contactsPanelLink}
                                        href={link.href}
                                        download={link.download}
                                        target={link.target}
                                        rel={link.rel}
                                        onClick={() => setContactsOpen(false)}
                                    >
                                        <span>{link.label}</span>
                                        <span className={styles.contactsPanelArrow} aria-hidden="true">↗</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                    </aside>
                </div>
            ) : null}
        </>
    )
}
