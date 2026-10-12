// Scorre fino alla sezione senza aggiungere #id all'indirizzo
export function scrollToSection(event, id) {
  // Cmd/Ctrl/Shift + clic o clic centrale: lascia fare al browser (nuova scheda, ecc.)
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0)
    return;

  const target = document.getElementById(id);
  if (!target) return;

  event.preventDefault();

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  target.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
}
