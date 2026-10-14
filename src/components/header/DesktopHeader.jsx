import { useRef } from "react";
import BrandFlight from "../brand/BrandFlight";
import { profile } from "../../content/profile";
import { sectors } from "../../content/sectors";
import useScrollSpy from "../../hooks/useScrollSpy";
import LiveryCoin from "../nav/LiveryCoin";
import { scrollToSection } from "../../utils/scrollToSection";

const SECTOR_IDS = sectors.map((sector) => sector.id);

const SECTOR_STYLES = {
  active: { code: "text-sector", label: "text-ink", bar: "bg-sector" },
  done: { code: "text-hi", label: "text-ink", bar: "bg-hi" },
  next: { code: "text-muted", label: "text-muted", bar: "bg-line" },
};

function getSectorState(index, activeIndex) {
  if (index === activeIndex) return "active";
  if (index < activeIndex) return "done";
  return "next";
}

function getLapText(activeIndex) {
  if (activeIndex < 0) return "In griglia";
  if (activeIndex === sectors.length - 1) return "Traguardo";
  return `Settore ${activeIndex + 1}/${sectors.length}`;
}

export default function DesktopHeader() {
  const slotRef = useRef(null);
  const { activeId, docked } = useScrollSpy(SECTOR_IDS);
  const activeIndex = SECTOR_IDS.indexOf(activeId);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-20 hidden px-6 pt-4 lg:block">
      <header className="pointer-events-auto relative mx-auto flex max-w-[1120px] items-center gap-[22px] rounded-3xl py-2.5 pr-2.5 pl-3">
        <span
          aria-hidden="true"
          className={`absolute inset-0 rounded-3xl border border-line bg-glass shadow-[0_12px_32px_rgba(0,0,0,0.28)] backdrop-blur-[14px] transition-[opacity,transform] ${
            docked
              ? "scale-100 opacity-100 delay-[120ms] duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              : "scale-[0.985] opacity-0 duration-[250ms] ease-out"
          }`}
        />

        <span
          ref={slotRef}
          aria-hidden="true"
          className="relative mr-1.5 block h-[46px] w-[190px] shrink-0"
        />

        <nav
          aria-label="Navigazione principale: settori del giro"
          className="relative flex min-w-0 flex-1 gap-2"
        >
          {sectors.map((sector, index) => {
            const state = getSectorState(index, activeIndex);
            const style = SECTOR_STYLES[state];

            return (
              <a
                key={sector.id}
                href={`#${sector.id}`}
                onClick={(event) => scrollToSection(event, sector.id)}
                aria-current={state === "active" ? "location" : undefined}
                className="flex min-h-11 min-w-0 flex-1 flex-col justify-center gap-[7px] px-0.5 py-1"
              >
                <span className="flex items-baseline gap-2 overflow-hidden whitespace-nowrap">
                  <span
                    className={`font-mono text-[11px] font-semibold tracking-[0.1em] transition-colors duration-300 ${style.code}`}
                  >
                    {sector.code}
                  </span>
                  <span
                    className={`truncate text-sm font-bold transition-colors duration-300 ${style.label}`}
                  >
                    {sector.label}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={`h-1 rounded-full transition-[background-color,opacity] duration-300 ${style.bar} ${
                    docked ? "opacity-100" : "opacity-50"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="relative flex items-center gap-2">
          <p
            aria-live="polite"
            className="mr-1.5 text-right font-mono text-[11px] leading-tight tracking-[0.1em] text-muted uppercase"
          >
            Giro
            <span className="block text-[13px] font-semibold text-ink">
              {getLapText(activeIndex)}
            </span>
          </p>

          <LiveryCoin size="sm" />

          <a
            href={profile.cvUrl}
            download
            className="flex min-h-11 items-center gap-2 rounded-full bg-accent px-[18px] text-sm font-bold text-on-accent transition-colors duration-500"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v12" />
              <path d="M7 10l5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            CV
          </a>
        </div>
      </header>
      <BrandFlight docked={docked} slotRef={slotRef} />
    </div>
  );
}
