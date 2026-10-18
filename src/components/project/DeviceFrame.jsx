const SHADOW = "shadow-[0_18px_40px_rgba(0,0,0,0.45)]";

export default function DeviceFrame({ image, className = "" }) {
  const screen = (
    <img
      src={image.src}
      alt={image.alt}
      className="size-full object-cover object-top"
    />
  );

  if (image.device === "mobile") {
    return (
      <div
        className={`relative aspect-[9/19.5] h-full max-w-full rounded-[2rem] border-[6px] border-[#111] bg-[#111] ${SHADOW} ${className}`}
      >
        <span
          aria-hidden="true"
          className="absolute top-2 left-1/2 z-10 h-3.5 w-[30%] -translate-x-1/2 rounded-full bg-[#111]"
        />
        <div className="size-full overflow-hidden rounded-[1.55rem]">
          {screen}
        </div>
      </div>
    );
  }

  if (image.device === "tablet") {
    return (
      <div
        className={`relative aspect-[3/4] h-full max-w-full rounded-[1.4rem] border-[9px] border-[#111] bg-[#111] ${SHADOW} ${className}`}
      >
        <span
          aria-hidden="true"
          className="absolute -top-[6px] left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-[#2b2b2b]"
        />
        <div className="size-full overflow-hidden rounded-[0.9rem]">
          {screen}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex aspect-[16/10] h-full max-w-full flex-col overflow-hidden rounded-lg border border-line bg-surface ${SHADOW} ${className}`}
    >
      <div
        aria-hidden="true"
        className="flex h-6 shrink-0 items-center gap-1.5 border-b border-line px-2.5"
      >
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="mx-3 h-3.5 flex-1 rounded-full bg-bg" />
      </div>
      <div className="min-h-0 flex-1">{screen}</div>
    </div>
  );
}
