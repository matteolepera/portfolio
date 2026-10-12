import { sectors } from "../../content/sectors";
import useScrollSpy from "../../hooks/useScrollSpy";
import LapAvatar from "./LapAvatar";
import LiveryCoin from "./LiveryCoin";
import { scrollToSection } from "../../utils/scrollToSection";

const SECTOR_IDS = sectors.map((sector) => sector.id);

// ICONE PROVVISORIE
const SECTOR_ICONS = {
  progetti: "M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14",
  "come-lavoro":
    "M14.7 6.3a4 4 0 0 0-5.4 5.4L3.6 17.4a1.9 1.9 0 0 0 2.7 2.7l5.7-5.7a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.4-.4-2.4z",
  "chi-sono":
    "M3.5 15.5a8.5 8.5 0 0 1 17-1.5v3.5H10.5L8.5 20h-4a1 1 0 0 1-1-1zM12.5 11h8",
  contatti:
    "M12 12h.01M8.8 15.2a4.5 4.5 0 0 1 0-6.4M15.2 8.8a4.5 4.5 0 0 1 0 6.4M5.9 18.1a8.6 8.6 0 0 1 0-12.2M18.1 5.9a8.6 8.6 0 0 1 0 12.2",
};

function getIconColor(index, activeIndex) {
  if (index === activeIndex) return "text-sector";
  if (index < activeIndex) return "text-hi";
  return "text-muted";
}

export default function BottomBar() {
  const { activeId, docked: shown } = useScrollSpy(SECTOR_IDS, {
    offset: 120,
    dockAt: 80,
    undockAt: 40,
  });
  const activeIndex = SECTOR_IDS.indexOf(activeId);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 flex justify-center px-3 pb-[calc(14px+env(safe-area-inset-bottom))] lg:hidden">
      <nav
        inert={!shown}
        aria-label="Navigazione principale: settori del giro"
        className={`pointer-events-auto flex w-full max-w-[440px] items-center gap-1 rounded-[28px] border border-line bg-glass py-1.5 pr-2 pl-1.5 shadow-[0_-8px_36px_rgba(0,0,0,0.4)] backdrop-blur-[16px] transition-[transform,opacity] md:max-w-[520px] md:gap-2.5 ${
          shown
            ? "translate-y-0 opacity-100 duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            : "translate-y-[140%] opacity-0 duration-[350ms] ease-[cubic-bezier(0.4,0,1,1)]"
        }`}
      >
        <LapAvatar shown={shown} />
        <span aria-hidden="true" className="h-[30px] w-px shrink-0 bg-line" />

        <div className="relative flex min-w-0 flex-1">
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute -top-[7px] left-0 flex h-[calc(100%+7px)] w-1/4 justify-center transition-[transform,opacity] duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              activeIndex < 0 ? "opacity-0" : "opacity-100"
            }`}
            style={{
              transform: `translateX(${Math.max(activeIndex, 0) * 100}%)`,
            }}
          >
            <span className="absolute top-0 h-[3px] w-[30px] rounded-b bg-sector shadow-[0_0_14px_2px_var(--sector)]" />
            <span
              className="absolute top-[3px] h-10 w-14"
              style={{
                background:
                  "radial-gradient(ellipse 50% 100% at 50% 0%, color-mix(in srgb, var(--sector) 32%, transparent), transparent)",
              }}
            />
          </span>

          {sectors.map((sector, index) => (
            <a
              key={sector.id}
              href={`#${sector.id}`}
              onClick={(event) => scrollToSection(event, sector.id)}
              aria-label={`${sector.code} ${sector.label}`}
              aria-current={index === activeIndex ? "location" : undefined}
              className={`relative flex min-h-[52px] min-w-0 flex-1 items-center justify-center transition-colors duration-300 ${getIconColor(
                index,
                activeIndex,
              )}`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={SECTOR_ICONS[sector.id]} />
              </svg>
            </a>
          ))}
        </div>

        <span aria-hidden="true" className="h-[30px] w-px shrink-0 bg-line" />
        <LiveryCoin />
      </nav>
    </div>
  );
}
