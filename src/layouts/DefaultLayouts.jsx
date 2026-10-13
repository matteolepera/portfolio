import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DesktopHeader from "../components/header/DesktopHeader";
import Footer from "../components/Footer";
import BottomBar from "../components/nav/BottomBar";
import BackToTop from "../components/nav/BackToTop";

export default function DefaultLayouts() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <DesktopHeader />
      <main id="top">
        <Outlet />
      </main>
      <Footer />
      <BottomBar />
      <BackToTop />
    </>
  );
}
