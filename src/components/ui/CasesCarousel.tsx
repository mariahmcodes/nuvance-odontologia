import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

import { cn } from "@/lib/utils";

/* ================= TYPES ================= */

type ImageCase = {
  id: number;
  type: "image";
  title: string;
  treatment: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

type VideoCase = {
  id: number;
  type: "video";
  title: string;
  treatment: string;
  video: {
    src: string;
    poster: string;
    preload?: "none" | "metadata" | "auto";
  };
};

type CaseItem = ImageCase | VideoCase;

interface CasesCarouselProps {
  items: readonly CaseItem[];
}

/* ================= COMPONENT ================= */

export default function CasesCarousel({ items }: CasesCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  /* ---------- NAV STATE ---------- */

  const syncNav = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    syncNav();
    emblaApi.on("select", syncNav);
    emblaApi.on("reInit", syncNav);
  }, [emblaApi, syncNav]);

  /* ---------- AUTOPLAY CORRIGIDO ---------- */

  useEffect(() => {
    if (!emblaApi) return;

    const syncVideos = () => {
      const inView = emblaApi.slidesInView();

      // pausa tudo primeiro
      Object.values(videoRefs.current).forEach((video) => {
        if (video) video.pause();
      });

      // toca apenas os visíveis
      inView.forEach((index) => {
        const item = items[index];
        if (!item || item.type !== "video") return;

        const video = videoRefs.current[item.id];

        if (video) {
          video.currentTime = 0;
          video.play().catch(() => {});
        }
      });
    };

    syncVideos();

    emblaApi.on("select", syncVideos);
    emblaApi.on("scroll", syncVideos);
    emblaApi.on("reInit", syncVideos);
  }, [emblaApi, items]);

  /* ================= UI ================= */

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 px-4 md:px-0">

          {items.map((c) => (
            <article
              key={c.id}
              className="
                relative shrink-0
                basis-[80%] sm:basis-[55%] lg:basis-[38%]
                aspect-[4/5]
                overflow-hidden
                rounded-lg
                border border-gold/15
                bg-petrol-soft/30
                group
              "
              aria-label={`Antes e depois — ${c.title}`}
            >

              {/* MEDIA */}
              <div className="absolute inset-0 z-0">

                {c.type === "video" ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[c.id] = el;
                    }}
                    src={c.video.src}
                    muted
                    playsInline
                    loop
                    preload={c.video.preload ?? "metadata"}
                    poster={c.video.poster}
                    className="w-full h-full object-cover bg-black"
                  />
                ) : (
                  <img
                    src={c.image.src}
                    alt={c.image.alt}
                    width={c.image.width}
                    height={c.image.height}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                )}

              </div>

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-petrol-deep via-petrol-deep/20 to-transparent z-[2]" />

              {/* TEXT */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-10">

                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={12}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>

                <h3 className="font-display text-xl text-ivory mb-1">
                  {c.title}
                </h3>

                <p className="text-xs text-ivory/65 uppercase tracking-[0.2em]">
                  {c.treatment}
                </p>

              </div>

            </article>
          ))}

        </div>
      </div>

      {/* CONTROLS (intactos, sem “melhoria criativa” maluca) */}
      <div className="flex items-center justify-end gap-3 mt-8">

        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
          className={cn(
            "h-12 w-12 rounded-full border border-gold/40 text-gold flex items-center justify-center",
            "transition-all duration-300",
            "hover:bg-gold hover:text-petrol-deep",
            "disabled:opacity-30 disabled:cursor-not-allowed"
          )}
        >
          <ArrowLeft size={18} />
        </button>

        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
          className={cn(
            "h-12 w-12 rounded-full border border-gold/40 text-gold flex items-center justify-center",
            "transition-all duration-300",
            "hover:bg-gold hover:text-petrol-deep",
            "disabled:opacity-30 disabled:cursor-not-allowed"
          )}
        >
          <ArrowRight size={18} />
        </button>

      </div>
    </div>
  );
}