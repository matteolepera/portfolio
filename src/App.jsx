import { BrowserRouter, Route, Routes } from "react-router-dom"
import Maintenance from "./pages/Maintenance"
import DefaultLayouts from "./layouts/DefaultLayouts"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />}>
            <Route element={<Maintenance />} path="/maintenance" />
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Projects />} path="/projects" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
