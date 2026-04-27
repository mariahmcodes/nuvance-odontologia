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
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="max-w-4xl mx-auto text-center relative z-20">
        <Reveal>
          <span className="eyebrow mb-6 text-gold">
            {ctaContent.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display text-5xl md:text-7xl text-ivory mb-8 leading-[1.1]">
            Sua jornada para um <br />
            <span className="italic text-gold font-light">
              {ctaContent.highlight}
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="text-ivory/60 max-w-xl mx-auto text-lg md:text-xl mb-16 leading-relaxed">
            {ctaContent.description}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 relative z-30 pointer-events-auto">
            <a
              href={ctaContent.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <NuvanceButton
                variant="gold"
                size="lg"
                className="w-full px-10 py-8 text-base shadow-gold-glow group cursor-pointer"
              >
                <MessageCircle
                  size={22}
                  className="group-hover:animate-pulse mr-2"
                />
                {ctaContent.primary}
              </NuvanceButton>
            </a>

            <a
              href={`tel:${ctaContent.phone}`}
              className="group flex items-center gap-4 text-ivory/80 hover:text-gold transition-all duration-300 font-sans tracking-widest text-xs uppercase font-bold cursor-pointer"
            >
              <div className="h-12 w-12 rounded-full border border-ivory/20 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500">
                <Phone size={18} />
              </div>
              <span>{ctaContent.secondary}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}