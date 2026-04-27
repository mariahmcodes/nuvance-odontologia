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
  { id: 6, title: "Caso #06", treatment: "Transformação Digital" },
];

export default function CasesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  // Funções de scroll forçadas
  const scrollPrev = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Reveal delay={0.08}>
      <div className="relative w-full">
        {/* VIEWPORT */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* CONTAINER */}
          <div className="flex ml-[-1.5rem]">
            {cases.map((c) => (
              <article
                key={c.id}
                className="relative min-w-0 flex-[0_0_85%] sm:flex-[0_0_55%] lg:flex-[0_0_38%] pl-6 aspect-[3/4]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-lg border border-gold/15 bg-petrol-soft/30 group">
                  {/* Placeholder da Foto (Substituir por <img> quando tiver) */}
                  <div
                    className="absolute inset-0 bg-petrol-soft/60 transition-transform duration-700 group-hover:scale-110"
                    role="img"
                    aria-label={`Antes e depois — ${c.title}`}
                  />
                  
                  {/* Overlay Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-petrol-deep via-petrol-deep/20 to-transparent opacity-90" />
                  
                  {/* Conteúdo do Card */}
                  <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={12} className="fill-gold text-gold" />
                      ))}
                    </div>
                    <h3 className="font-display text-2xl text-ivory mb-1">
                      {c.title}
                    </h3>
                    <p className="text-xs text-gold/80 uppercase tracking-[0.2em] font-medium">
                      {c.treatment}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CONTROLES - Com z-index alto e pointer-events garantido */}
        <div className="flex items-center justify-end gap-3 mt-8 relative z-50">
          <button
            type="button"
            aria-label="Caso anterior"
            onClick={scrollPrev}
            className={cn(
              "h-12 w-12 rounded-full border border-gold/40 text-gold flex items-center justify-center",
              "transition-all duration-300 ease-elegant hover:bg-gold hover:text-petrol-deep active:scale-90 cursor-pointer"
            )}
          >
            <ArrowLeft size={18} />
          </button>
          
          <button
            type="button"
            aria-label="Próximo caso"
            onClick={scrollNext}
            className={cn(
              "h-12 w-12 rounded-full border border-gold/40 text-gold flex items-center justify-center",
              "transition-all duration-300 ease-elegant hover:bg-gold hover:text-petrol-deep active:scale-90 cursor-pointer"
            )}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </Reveal>
  );
}