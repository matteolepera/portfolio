import { sectors } from "../../content/sectors";
import useScrollSpy from "../../hooks/useScrollSpy";
import { useTheme } from "../../theme/themeContext";
import useSectionNavigation from "../../hooks/useSectionNavigation";
import LapAvatar from "./LapAvatar";
import LiveryCoin from "./LiveryCoin";
import { sectorIcons } from "./sectorIcons";

const SECTOR_IDS = sectors.map((sector) => sector.id);

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
  const { theme } = useTheme();
  const goToSection = useSectionNavigation();

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

          {sectors.map((sector, index) => {
            const Icon = sectorIcons[sector.id][theme];

            return (
              <a
                key={sector.id}
                href={`/#${sector.id}`}
                onClick={(event) => goToSection(event, sector.id)}
                aria-label={`${sector.code} ${sector.label}`}
                aria-current={index === activeIndex ? "location" : undefined}
                className={`relative flex min-h-[52px] min-w-0 flex-1 items-center justify-center transition-colors duration-300 ${getIconColor(
                  index,
                  activeIndex,
                )}`}
              >
                <span
                  key={theme}
                  className="flex animate-icon-flip motion-reduce:animate-none"
                  style={{ animationDelay: `${150 + index * 70}ms` }}
                >
                  <Icon size={24} stroke={1.9} aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>

        <span aria-hidden="true" className="h-[30px] w-px shrink-0 bg-line" />
        <LiveryCoin />
      </nav>
    </div>
  );
}
