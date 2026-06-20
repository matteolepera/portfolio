import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import styles from "../styles/DefaultLayouts.module.css"

export default function DefaultLayouts() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}
