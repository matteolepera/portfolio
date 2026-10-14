import { hero, profile } from "../../content/profile";
import Identity from "../brand/Identity";
import Telemetry from "./Telemetry";
import { scrollToSection } from "../../utils/scrollToSection";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-8 px-5 pt-10 pb-16 md:gap-10 md:px-8 md:pt-14 md:pb-20 lg:gap-14 lg:pt-16 lg:pb-[104px]">
      <div className="min-w-0 flex-[999_1_600px]">
        <div
          data-hero-identity
          className="mb-8 inline-flex items-center gap-3 md:gap-4 whitespace-nowrap lg:invisible"
        >
          <Identity />
        </div>

        <h1 className="display-title text-[clamp(34px,10.4vw,48px)] leading-[0.96] md:text-[clamp(44px,7.4vw,72px)] lg:text-[clamp(44px,6.4vw,92px)]">
          {hero.title}
          <span className="block text-accent transition-colors duration-500">
            {hero.titleAccent}
          </span>
        </h1>

        <p className="mt-8 max-w-[56ch] text-[17px] text-muted md:text-lg lg:text-[19px]">
          {hero.lead}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="#progetti"
            onClick={(event) => scrollToSection(event, "progetti")}
            className="inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-accent px-[26px] text-base font-bold text-on-accent transition-colors duration-500"
          >
            Guarda i progetti
            <span aria-hidden="true">→</span>
          </a>
          <span className="flex gap-[22px] text-[15px] font-semibold">
            <a href={profile.links.github} className="py-3">
              GitHub ↗
            </a>
            <a href={profile.links.linkedin} className="py-3">
              LinkedIn ↗
            </a>
            <a href={`mailto:${profile.email}`} className="py-3">
              Email ↗
            </a>
          </span>
        </div>
      </div>

      <Telemetry />
    </section>
  );
}
