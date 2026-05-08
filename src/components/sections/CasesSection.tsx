import { Quote } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/Reveal";
import CasesCarousel from "@/components/ui/CasesCarousel";
import { casesContent, casesItems } from "@/constants/content";

export default function CasesSection() {
  return (
    <SectionWrapper id="casos" tone="deep" texture="gold-overlay">
      <div className="relative z-10">

        <header className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow mb-5 block">
                {casesContent.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h2
                id="cases-title"
                className="font-display text-ivory text-3xl md:text-5xl"
              >
                {casesContent.title}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <p className="max-w-md text-ivory/70 leading-relaxed text-sm md:text-base">
              {casesContent.description}
            </p>
          </Reveal>
        </header>

        <Reveal delay={0.2}>
          <section
            role="region"
            aria-label="Galeria de casos clínicos antes e depois"
          >
            <CasesCarousel items={casesItems} />
          </section>
        </Reveal>

        <Reveal delay={0.35}>
          <figure className="
            mt-14 md:mt-24
            max-w-4xl mx-auto text-center
            border-t border-white/10
            pt-10 md:pt-16
          ">
            <Quote
              size={28}
              className="text-gold mx-auto mb-6 opacity-40"
              aria-hidden="true"
            />

            <blockquote className="
              font-display
              text-xl md:text-4xl
              text-ivory
              leading-tight
              italic
              mb-6 md:mb-8
              px-3 md:px-4
            ">
              “{casesContent.testimonial.quote}”
            </blockquote>

            <figcaption className="
              text-[10px] md:text-[11px]
              uppercase tracking-[0.25em] md:tracking-[0.3em]
              text-gold font-bold
            ">
              — {casesContent.testimonial.author}
            </figcaption>
          </figure>
        </Reveal>

      </div>
    </SectionWrapper>
  );
}