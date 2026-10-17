import { useEffect, useState } from "react";
import useInitialLoad from "../../hooks/useInitialLoad";
import LoadingScreen from "./LoadingScreen";

export default function InitialLoader() {
  const ready = useInitialLoad();
  const [gone, setGone] = useState(false);

  // Mentre la schermata è visibile, la pagina sotto non scorre
  useEffect(() => {
    if (ready) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  if (gone) return null;

  return (
    <div
      aria-hidden={ready}
      onTransitionEnd={() => {
        if (ready) setGone(true);
      }}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-bg px-5 transition-opacity duration-500 ${
        ready ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <LoadingScreen />
    </div>
  );
}
