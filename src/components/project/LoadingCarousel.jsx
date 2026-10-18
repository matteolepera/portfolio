import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import useCarousel from "../../hooks/useCarousel";
import DeviceFrame from "./DeviceFrame";

const LABEL = "font-semibold tracking-[0.08em] uppercase [font-stretch:75%]";

const ARROW =
  "absolute top-1/2 hidden size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-line bg-bg/90 text-ink backdrop-blur transition-colors hover:border-accent md:flex";

export default function LoadingCarousel({ images, projectName }) {
  const { index, count, next, prev, goTo, bind } = useCarousel(images.length);

  if (count === 0) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-2xl border border-line bg-surface">
        <span className={`${LABEL} text-[11px] text-muted`}>
          [Screenshot in arrivo]
        </span>
      </div>
    );
  }

  const current = images[index];

  return (
    <section
      aria-roledescription="carosello"
      aria-label={`Schermate di ${projectName}`}
      tabIndex={0}
      {...bind}
      className="overflow-hidden rounded-2xl border border-line bg-bg outline-offset-4 focus-visible:outline-2 focus-visible:outline-accent"
    >
      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-surface px-4 pt-4 pb-10 md:px-8 md:pt-8 md:pb-14">
        <DeviceFrame
          key={current.src}
          image={current}
          className="animate-panel-in motion-reduce:animate-none"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-3 -left-3 skew-x-[-14deg] bg-accent py-0.5 pr-4 pl-6 md:bottom-6 md:-left-3.5 md:py-1 md:pr-7 md:pl-9"
        >
          <span className="block skew-x-[14deg] text-sm font-black text-on-accent uppercase italic md:text-2xl">
            {projectName}
          </span>
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Scena precedente"
              className={`${ARROW} left-3`}
            >
              <IconChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Scena successiva"
              className={`${ARROW} right-3`}
            >
              <IconChevronRight size={20} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      <div className="flex flex-col gap-1.5 bg-[#0b0014] px-3.5 py-2 md:flex-row md:items-center md:gap-3">
        {count > 1 && (
          <div className="flex w-full gap-[3px] md:order-2 md:w-28">
            {images.map((image, imageIndex) => (
              <button
                key={image.src}
                type="button"
                onClick={() => goTo(imageIndex)}
                aria-label={`Scena ${imageIndex + 1}: ${image.label}`}
                aria-current={imageIndex === index ? "true" : undefined}
                className="flex h-5 flex-1 cursor-pointer items-center md:h-6"
              >
                <span
                  className={`h-1 w-full transition-colors duration-300 md:h-[5px] ${
                    imageIndex <= index ? "bg-hi" : "bg-line"
                  }`}
                />
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3 md:contents">
          <p className="min-w-0 flex-1 text-xs text-muted md:order-1">
            {count > 1 ? (
              <>
                <span className="font-bold text-hi">Suggerimento:</span>{" "}
                <span className="md:hidden">scorri di lato.</span>
                <span className="hidden md:inline">
                  usa ← → per cambiare scena.
                </span>
              </>
            ) : (
              current.label
            )}
          </p>
          <span className={`${LABEL} text-[11px] text-ink md:order-3`}>
            {index + 1}/{count}
          </span>
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        Scena {index + 1} di {count}: {current.label}
      </p>
    </section>
  );
}
