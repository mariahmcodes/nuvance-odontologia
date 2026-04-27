import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { NuvanceButton } from "@/components/ui/NuvanceButton";
import goldTexture from "@/assets/gold-geometric-texture.png";
import { heroContent } from "@/constants/content";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-petrol-deep"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-petrol-deep via-petrol to-petrol-deep" />

        <div
          aria-hidden
          className="absolute inset-0 texture-gold-overlay-strong opacity-20"
          style={{ ["--texture-gold-image" as any]: `url(${goldTexture})` }}
        />

        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="nuvance-container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow text-gold mb-6">
              {heroContent.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display text-ivory mb-8">
              {heroContent.title.main}{" "}
              <em className="text-gold not-italic font-light italic">
                {heroContent.title.highlight}
              </em>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-lg md:text-xl text-ivory/75 max-w-xl mb-10 leading-relaxed">
              {heroContent.description}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex flex-wrap gap-4">
              <NuvanceButton
                variant="gold"
                size="lg"
                className="shadow-gold-glow"
                asChild
              >
                <a
                  href={heroContent.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {heroContent.cta.primary} <ArrowRight size={16} />
                </a>
              </NuvanceButton>

              <NuvanceButton variant="ghost-light" size="lg" asChild>
                <a href="#tratamentos">
                  {heroContent.cta.secondary}
                </a>
              </NuvanceButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}