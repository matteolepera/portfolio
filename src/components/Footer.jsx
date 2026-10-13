import { footerLines, profile } from "../content/profile";
import { useTheme } from "../theme/themeContext";
import { scrollToSection } from "../utils/scrollToSection";
import Avatar from "./brand/Avatar";

const YEAR = new Date().getFullYear();

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 px-5 pt-10 pb-32 text-center md:px-8 lg:flex-row lg:justify-between lg:gap-10 lg:pb-12 lg:text-left">
      <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-3.5">
        <Avatar className="size-14 lg:size-12" ring="border-2" />
        <div>
          <p className="font-extrabold tracking-[0.01em] uppercase [font-stretch:112%]">
            {profile.name}
          </p>
          <p className="text-sm text-muted">{profile.role}</p>
        </div>
      </div>

      <p className="max-w-[32ch] text-[15px] text-muted lg:max-w-none lg:flex-[1_1_280px] lg:text-center">
        {footerLines[theme]}
      </p>

      <div className="flex items-center gap-6 font-mono text-[13px] text-muted">
        <span>© {YEAR}</span>
        <a
          href="#top"
          onClick={(event) => scrollToSection(event, "top")}
          className="hidden min-h-11 items-center gap-2 rounded-full border border-line px-4 font-semibold tracking-[0.06em] text-ink uppercase lg:flex"
        >
          Box, box <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
