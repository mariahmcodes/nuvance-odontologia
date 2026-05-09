import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CaseItem {
  id: number;
  title: string;
  treatment: string;
  type: "video" | "image";
  src: string;
}

interface CasesCarouselProps {
  items: readonly CaseItem[];
}

export default function CasesCarousel({ items }: CasesCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

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

              <div className="absolute inset-0 z-0">
                {c.type === "video" ? (
                  <video
                  src={c.src}
                  muted
                  playsInline
                  loop
                  autoPlay
                  preload="auto"
                  poster={c.src + "#t=0.1"}
                  className="w-full h-full object-cover bg-black"
                />
                ) : (
                  <img
                    src={c.src}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-petrol-deep via-petrol-deep/20 to-transparent z-[2]" />

              <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={12} className="fill-gold text-gold" />
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