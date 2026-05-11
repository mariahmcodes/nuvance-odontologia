import { heroContent } from "@/constants/content";
import { NuvanceButton } from "@/components/ui/NuvanceButton";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-petrol-deep"
    >
      {/* Background system */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">

        {/* gradient base */}
        <div className="
          absolute inset-0
          bg-gradient-to-br
          from-petrol-deep
          via-petrol
          to-petrol-deep
        " />

        {/* texture SYSTEM REAL do CSS */}
        <div className="absolute inset-0 texture-gold-overlay" />

        {/* overlay escuro leve */}
        <div className="absolute inset-0 bg-black/20" />

      </div>

      {/* Content */}
      <div className="
        nuvance-container
        relative z-10
        pt-28 md:pt-32
        pb-16 md:pb-20
      ">
        <div className="max-w-3xl">

          <span className="eyebrow text-gold mb-6 inline-block">
            {heroContent.eyebrow}
          </span>

          <h1
            id="hero-title"
            className="font-display text-ivory mb-6 md:mb-8"
          >
            {heroContent.title.main}{" "}
            <em className="text-gold italic not-italic font-light">
              {heroContent.title.highlight}
            </em>
          </h1>

          <p className="max-w-xl mb-8 md:mb-10 text-base md:text-xl leading-relaxed text-ivory/75">
            {heroContent.description}
          </p>

          <div className="flex flex-wrap gap-4">

            <NuvanceButton variant="gold" size="md" asChild>
              <a
                href={heroContent.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {heroContent.cta.primary}
              </a>
            </NuvanceButton>

            <NuvanceButton variant="outline-gold" size="md" asChild>
              <a href="#tratamentos">
                {heroContent.cta.secondary}
              </a>
            </NuvanceButton>

          </div>

        </div>
      </div>
    </section>
  );
}