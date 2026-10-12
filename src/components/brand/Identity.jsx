import { profile } from "../../content/profile";
import Avatar from "./Avatar";

export default function Identity() {
  return (
    <>
      <Avatar className="size-16 lg:size-[72px]" />

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
