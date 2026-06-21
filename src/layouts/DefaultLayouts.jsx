import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/Header"

export default function DefaultLayouts() {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}
