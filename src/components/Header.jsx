import { useEffect, useState } from "react"
import styles from "../styles/Header.module.css"

const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contacts", label: "Contacts" },
]

export default function Header() {
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        const observedSections = navigationItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean)

        if (observedSections.length === 0) {
            return undefined
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((firstEntry, secondEntry) => secondEntry.intersectionRatio - firstEntry.intersectionRatio)[0]

                if (visibleEntry?.target?.id) {
                    setActiveSection(visibleEntry.target.id)
                }
            },
            {
                root: null,
                threshold: [0.18, 0.32, 0.5, 0.68],
                rootMargin: "-28% 0px -42% 0px",
            },
        )

        observedSections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    const handleNavigate = (sectionId) => (event) => {
        event.preventDefault()
        setActiveSection(sectionId)
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }

    return (
        <header className={styles.header}>
            <nav className={styles.headerNav} aria-label="Main navigation">
                {navigationItems.map((item) => (
                    <a
                        key={item.id}
                        className={`${styles.headerLink} ${activeSection === item.id ? styles.headerLinkActive : ""}`}
                        href={`#${item.id}`}
                        onClick={handleNavigate(item.id)}
                        aria-current={activeSection === item.id ? "page" : undefined}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </header>
    )
}
