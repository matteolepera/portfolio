import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DefaultLayouts from "./layouts/DefaultLayouts";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayouts />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
