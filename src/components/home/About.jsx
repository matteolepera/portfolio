import { about, path, skills, stats } from "../../content/about";
import PathPanel from "./PathPanel";
import SkillsPanel from "./SkillsPanel";
import StatsPanel from "./StatsPanel";
import Avatar from "../brand/Avatar";

export default function About() {
  return (
    <section id="chi-sono" className="scroll-mt-[88px] border-t border-line">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20 lg:py-24">
        <p className="font-mono text-[13px] tracking-[0.12em] text-accent-text uppercase">
          03 — Chi sono
        </p>

        <div className="mt-[18px] flex flex-wrap items-center gap-x-10 gap-y-7">
          <Avatar className="size-24 md:size-28 lg:size-[132px]" />
          <div className="min-w-0 flex-[1_1_520px]">
            <h2 className="display-title text-[clamp(32px,3.6vw,52px)] leading-none">
              Chi sono
            </h2>
            <p className="mt-4 max-w-[62ch] text-lg lg:text-[19px]">
              {about.intro}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <StatsPanel stats={stats} note={about.statsNote} />
          <PathPanel steps={path} />
          <SkillsPanel skills={skills} />
        </div>
      </div>
    </section>
  );
}
