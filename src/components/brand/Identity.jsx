import { profile } from "../../content/profile";
import Avatar from "./Avatar";

export default function Identity() {
  return (
    <>
      <Avatar className="size-14 md:size-16 lg:size-[72px]" />

      <span className="flex flex-col">
        <span className="text-[clamp(18px,5.6vw,22px)] leading-[1.15] font-extrabold tracking-[0.01em] uppercase [font-stretch:112%] md:text-[23px] lg:text-[26px]">
          {profile.name}
        </span>
        <span className="text-[15px] leading-[1.35] text-muted md:text-[17px] lg:text-[19px]">
          {profile.role}
        </span>
      </span>
    </>
  );
}
