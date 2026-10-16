import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import useCarousel from "../../hooks/useCarousel";

const LABEL = "font-semibold tracking-[0.08em] uppercase [font-stretch:75%]";

export default function OnboardCarousel({ images, projectName }) {
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
      className="overflow-hidden rounded-2xl border border-line bg-surface outline-offset-4 focus-visible:outline-2 focus-visible:outline-accent"
    >
      <div className="relative flex aspect-video items-center justify-center bg-bg">
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="size-full animate-panel-in object-contain motion-reduce:animate-none"
        />

        <span
          aria-live="polite"
          className={`${LABEL} absolute top-3 left-3 bg-accent px-1.5 py-0.5 text-[11px] text-on-accent`}
        >
          Onboard · camera {index + 1}/{count}
        </span>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Schermata precedente"
              className="absolute top-1/2 left-3 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-line bg-surface/90 text-ink backdrop-blur transition-colors hover:border-accent"
            >
              <IconChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Schermata successiva"
              className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-line bg-surface/90 text-ink backdrop-blur transition-colors hover:border-accent"
            >
              <IconChevronRight size={20} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(88px,1fr))] gap-1.5 p-2">
          {images.map((image, imageIndex) => {
            const active = imageIndex === index;

            return (
              <button
                key={image.src}
                type="button"
                onClick={() => goTo(imageIndex)}
                aria-label={`Camera ${imageIndex + 1}: ${image.label}`}
                aria-current={active ? "true" : undefined}
                className={`${LABEL} cursor-pointer rounded-lg px-2 py-2 text-[10px] transition-colors ${
                  active
                    ? "border-2 border-accent text-ink"
                    : "border border-line text-muted hover:text-ink"
                }`}
              >
                Cam {imageIndex + 1} · {image.label}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
