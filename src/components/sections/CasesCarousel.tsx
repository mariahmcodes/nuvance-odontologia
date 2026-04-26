import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface CaseItem {
  id: number;
  title: string;
  treatment: string;
}

const cases: CaseItem[] = [
  { id: 1, title: "Caso #01", treatment: "Implantes + Facetas" },
  { id: 2, title: "Caso #02", treatment: "Lentes de Contato" },
  { id: 3, title: "Caso #03", treatment: "Reabilitação Total" },
  { id: 4, title: "Caso #04", treatment: "Carga Imediata" },
  { id: 5, title: "Caso #05", treatment: "Estética Avançada" },
];

export default function CasesCarousel() {
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
    <Reveal delay={0.08}>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 -ml-6 pl-6">
            {cases.map((c) => (
              <article
                key={c.id}
                className="relative shrink-0 grow-0 basis-[85%] sm:basis-[55%] lg:basis-[38%] aspect-[3/4] overflow-hidden rounded-lg border border-gold/15 bg-petrol-soft/30"
              >
                <div
                  className="absolute inset-0 bg-petrol-soft/40"
                  role="img"
                  aria-label={`Antes e depois — ${c.title}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petrol-deep via-petrol-deep/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
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
            aria-label="Caso anterior"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            className={cn(
              "h-12 w-12 rounded-full border border-gold/40 text-gold flex items-center justify-center",
              "transition-all duration-300 ease-elegant hover:bg-gold hover:text-petrol-deep",
              "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gold"
            )}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Próximo caso"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            className={cn(
              "h-12 w-12 rounded-full border border-gold/40 text-gold flex items-center justify-center",
              "transition-all duration-300 ease-elegant hover:bg-gold hover:text-petrol-deep",
              "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gold"
            )}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </Reveal>
  );
}