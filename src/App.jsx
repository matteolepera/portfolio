import { BrowserRouter, Route, Routes } from "react-router-dom"
import Maintenance from "./pages/Maintenance"
import DefaultLayouts from "./layouts/DefaultLayouts"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />}>
            <Route element={<Maintenance />} path="/maintenance" />
            <Route element={<Home />} path="/" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
