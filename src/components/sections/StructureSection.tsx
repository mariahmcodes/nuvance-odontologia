import { useState } from "react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/Reveal";
import { structureContent } from "@/constants/content";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StructureSection() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % structureContent.gallery.length);

  const prev = () =>
    setIndex(
      (prev) =>
        (prev - 1 + structureContent.gallery.length) %
        structureContent.gallery.length
    );

  function Carousel() {
    return (
      <div className="relative group">
        <Reveal>
          <div className="relative aspect-[4/3] md:aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-elegant bg-petrol-soft/10">

            {structureContent.gallery.map((img, i) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.label}
                className={`
                  absolute inset-0 w-full h-full object-cover transition-all duration-700
                  ${index === i ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}

            <div className="absolute inset-0 flex items-center justify-between px-3 md:px-6">
              <button
                onClick={prev}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/20 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-black/40 transition"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={next}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/20 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-black/40 transition"
                aria-label="Próximo"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="absolute bottom-0 right-0 bg-gold text-petrol-deep px-5 py-3 rounded-tl-[2rem] shadow-elegant">
              <span className="text-[10px] uppercase tracking-[0.2em] font-black">
                {structureContent.gallery[index].label}
              </span>
            </div>

          </div>
        </Reveal>
      </div>
    );
  }

  return (
    <SectionWrapper id="estrutura" tone="light">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">

        {/* TEXTO */}
        <div>

          {/* HEADER */}
          <div>
            <Reveal>
              <span className="eyebrow mb-5 block">
                {structureContent.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-display text-petrol-deep mb-6 text-4xl md:text-5xl leading-[1.1]">
                {structureContent.title}
              </h2>
            </Reveal>
          </div>

          {/* MOBILE */}
          <div className="mb-8 lg:hidden">
            <Carousel />
          </div>

          {/* TEXTO RESTANTE */}
          <Reveal delay={0.16}>
            <p className="text-petrol-deep/75 mb-8 leading-relaxed text-base md:text-lg">
              {structureContent.description}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="space-y-4" role="list">
              {structureContent.features.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-petrol-deep/85 font-medium"
                >
                  <span className="h-2 w-2 rounded-full bg-gold shrink-0 mt-2" />

                  <span className="text-sm md:text-base leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block">
          <Carousel />
        </div>

      </div>
    </SectionWrapper>
  );
}