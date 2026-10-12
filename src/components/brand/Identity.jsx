import { profile } from "../../content/profile";

export default function Identity() {
  return (
    <>
      <span
        title="Foto profilo"
        className="flex size-[72px] shrink-0 items-end justify-center overflow-hidden rounded-full border-3 border-accent bg-surface text-muted transition-colors duration-500"
      >
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <circle cx="12" cy="9" r="4" />
          <path d="M4 23c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
        </svg>
      </span>
      <span className="flex flex-col">
        <span className="text-[26px] leading-[1.15] font-extrabold tracking-[0.01em] uppercase [font-stretch:112%]">
          {profile.name}
        </span>
        <span className="text-[19px] leading-[1.35] text-muted">
          {profile.role}
        </span>
      </span>
    </>
  );
}
