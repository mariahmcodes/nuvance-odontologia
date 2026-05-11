import { useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/Reveal";

import { structureContent } from "@/constants/content";

export default function StructureSection() {
  const [index, setIndex] = useState(0);

  const currentImage = structureContent.gallery[index];

  const next = () => {
    setIndex((prev) =>
      (prev + 1) % structureContent.gallery.length
    );
  };

  const prev = () => {
    setIndex((prev) =>
      (prev - 1 + structureContent.gallery.length) %
      structureContent.gallery.length
    );
  };

  function Carousel() {
    return (
      <div className="relative group">
        <Reveal>
          <div
            className="
              relative
              aspect-[4/3] md:aspect-video
              overflow-hidden
              rounded-[2.5rem]
              border border-white/10
              bg-petrol-soft/10
              shadow-elegant
            "
          >
            <img
              key={currentImage.src}
              src={currentImage.src}
              alt={currentImage.label}
              width={1024}
              height={576}
              loading="lazy"
              decoding="async"
              className="
                h-full w-full
                object-cover
                transition-opacity duration-500
              "
            />

            <div
              className="
                absolute inset-0
                flex items-center justify-between
                px-3 md:px-6
              "
            >
              <button
                type="button"
                onClick={prev}
                aria-label="Imagem anterior"
                className="
                  flex items-center justify-center
                  w-10 h-10 md:w-12 md:h-12
                  rounded-full
                  border border-white/10
                  bg-black/20
                  text-white
                  backdrop-blur
                  transition
                  hover:bg-black/40
                "
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Próxima imagem"
                className="
                  flex items-center justify-center
                  w-10 h-10 md:w-12 md:h-12
                  rounded-full
                  border border-white/10
                  bg-black/20
                  text-white
                  backdrop-blur
                  transition
                  hover:bg-black/40
                "
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div
              className="
                absolute bottom-0 right-0
                rounded-tl-[2rem]
                bg-gold
                px-5 py-3
                text-petrol-deep
                shadow-elegant
              "
            >
              <span
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                "
              >
                {currentImage.label}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    );
  }

  return (
    <SectionWrapper
      id="estrutura"
      tone="light"
    >
      <div
        className="
          grid lg:grid-cols-2
          items-center
          gap-10 md:gap-12 lg:gap-16
        "
      >

        {/* TEXTO */}
        <div>

          <div>
            <Reveal>
              <span className="eyebrow mb-5 block">
                {structureContent.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2
                className="
                  font-display
                  text-4xl md:text-5xl
                  leading-[1.1]
                  text-petrol-deep
                  mb-6
                "
              >
                {structureContent.title}
              </h2>
            </Reveal>
          </div>

          {/* MOBILE */}
          <div className="mb-8 lg:hidden">
            <Carousel />
          </div>

          <Reveal delay={0.16}>
            <p
              className="
                text-base md:text-lg
                leading-relaxed
                text-petrol-deep/75
                mb-8
              "
            >
              {structureContent.description}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <ul
              role="list"
              className="space-y-4"
            >
              {structureContent.features.map((item) => (
                <li
                  key={item}
                  className="
                    flex items-start gap-4
                    font-medium
                    text-petrol-deep/85
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      h-2 w-2
                      rounded-full
                      bg-gold
                      shrink-0
                      mt-2
                    "
                  />

                  <span
                    className="
                      text-sm md:text-base
                      leading-snug
                    "
                  >
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