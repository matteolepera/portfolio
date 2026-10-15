import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";

// In home scorre fino alla sezione; da un'altra pagina torna in home e poi ci scorre
export default function useSectionNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (event, id) => {
    if (location.pathname === "/") {
      scrollToSection(event, id);
      return;
    }

    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0)
      return;

    event.preventDefault();
    navigate("/", { state: { section: id } });
  };
}
