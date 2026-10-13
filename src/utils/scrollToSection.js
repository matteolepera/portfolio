// Scorre fino alla sezione senza aggiungere #id all'indirizzo
export function scrollToSection(event, id) {
  // Cmd/Ctrl/Shift + clic o clic centrale: lascia fare al browser (nuova scheda, ecc.)
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const behavior = reduceMotion ? "auto" : "smooth";

  // "top" significa l'inizio della pagina: si scorre direttamente alla posizione zero
  if (id === "top") {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const target = document.getElementById(id);
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior, block: "start" });
}