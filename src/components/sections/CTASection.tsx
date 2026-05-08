import { MessageCircle, Phone } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { NuvanceButton } from "@/components/ui/NuvanceButton";
import Reveal from "@/components/Reveal";
import { ctaContent } from "@/constants/content";

export default function CTASection() {
  return (
    <SectionWrapper
      id="contato"
      tone="dark"
      texture="gold-overlay"
      className="py-20 md:py-32"
    >
      <section aria-labelledby="cta-title">

        <div className="max-w-4xl mx-auto text-center relative z-20">

          <Reveal>
            <span className="eyebrow mb-6 text-gold block">
              {ctaContent.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2
              id="cta-title"
              className="
                font-display text-4xl md:text-7xl
                text-ivory mb-6 md:mb-8
                leading-[1.1]
              "
            >
              Sua jornada para um <br />
              <span className="italic text-gold font-light">
                {ctaContent.highlight}
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-ivory/60 max-w-xl mx-auto text-base md:text-xl mb-12 md:mb-16 leading-relaxed">
              {ctaContent.description}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div
              className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
              role="group"
            >

              <NuvanceButton variant="gold" size="md" asChild>
                <a
                  href={ctaContent.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <MessageCircle size={18} className="mr-2" />
                  {ctaContent.primary}
                </a>
              </NuvanceButton>

              <a
                href={`tel:${ctaContent.phone}`}
                className="
                  flex items-center gap-3
                  text-ivory/80 hover:text-gold
                  transition-colors
                  uppercase tracking-[0.18em]
                  text-[10px] font-bold
                "
              >
                <div className="h-10 w-10 rounded-full border border-ivory/20 flex items-center justify-center">
                  <Phone size={14} />
                </div>
                {ctaContent.secondary}
              </a>

            </div>
          </Reveal>

        </div>
      </section>
    </SectionWrapper>
  );
}