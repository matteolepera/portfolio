import { BrowserRouter, Route, Routes } from "react-router-dom"
import Maintenance from "./pages/Maintenance"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Maintenance />} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
