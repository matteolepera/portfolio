import { footerLines, profile } from "../content/profile";
import { useTheme } from "../theme/themeContext";
import Avatar from "./brand/Avatar";
import { scrollToSection } from "../utils/scrollToSection";

const YEAR = new Date().getFullYear();

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-10 gap-y-6 px-5 pt-8 pb-28 md:px-8 md:pt-9 lg:pt-10 lg:pb-12">
      <div className="flex items-center gap-3.5">
        <Avatar className="size-12" ring="border-2" />
        <div>
          <p className="font-extrabold tracking-[0.01em] uppercase [font-stretch:112%]">
            {profile.name}
          </p>
          <p className="text-sm text-muted">{profile.role}</p>
        </div>
      </div>

      <p className="flex-[1_1_280px] text-center text-[15px] text-muted">
        {footerLines[theme]}
      </p>

      <div className="flex items-center gap-6 font-mono text-[13px] text-muted">
        <span>© {YEAR}</span>
        <a
          href="#top"
          onClick={(event) => scrollToSection(event, "progetti")}
          className="flex min-h-11 items-center gap-2 rounded-full border border-line px-4 font-semibold tracking-[0.06em] text-ink uppercase"
        >
          Box, box <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
