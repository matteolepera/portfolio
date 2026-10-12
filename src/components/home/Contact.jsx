import { profile } from "../../content/profile";

export default function Contact() {
  return (
    <section
      id="contatti"
      className="scroll-mt-6 lg:scroll-mt-[88px] bg-accent text-on-accent transition-colors duration-500"
    >
      <div className="mx-auto max-w-[1200px] px-5 py-[72px] md:px-8 md:py-[88px] lg:py-[104px]">
        <p className="font-mono text-[13px] tracking-[0.12em] uppercase">
          04 — Contatti
        </p>
        <h2 className="display-title mt-4 text-[clamp(48px,7.6vw,112px)] leading-[0.95]">
          Parliamone.
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="mt-7 inline-block py-1.5 text-[clamp(22px,2.6vw,34px)] font-bold underline decoration-2 underline-offset-[6px] [overflow-wrap:anywhere]"
        >
          {profile.email}
        </a>

        <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2 text-[17px] font-bold">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="py-2.5"
          >
            LinkedIn ↗
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="py-2.5"
          >
            GitHub ↗
          </a>
          <a href={profile.cvUrl} download className="py-2.5">
            Scarica il CV ↓
          </a>
        </div>
      </div>
    </section>
  );
}
