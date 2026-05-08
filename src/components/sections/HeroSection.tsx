import { heroContent } from "@/constants/content";
import { NuvanceButton } from "@/components/ui/NuvanceButton";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-petrol-deep"
      aria-labelledby="hero-title"
    >
      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-petrol-deep via-petrol to-petrol-deep" />

        {/* texture otimizada */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 bg-[url('/gold-geometric-texture.webp')] bg-cover bg-center"
        />

        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="nuvance-container relative z-10 pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-3xl">

          <span className="eyebrow text-gold mb-6 inline-block">
            {heroContent.eyebrow}
          </span>

          <h1
            id="hero-title"
            className="font-display text-ivory mb-6 md:mb-8"
          >
            {heroContent.title.main}{" "}
            <em className="text-gold not-italic font-light italic">
              {heroContent.title.highlight}
            </em>
          </h1>

          <p className="text-base md:text-xl text-ivory/75 max-w-xl mb-8 md:mb-10 leading-relaxed">
            {heroContent.description}
          </p>

          <div className="flex flex-wrap gap-4">

            <NuvanceButton variant="gold" size="md" asChild>
              <a
                href={heroContent.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar consulta pelo WhatsApp"
              >
                {heroContent.cta.primary}
              </a>
            </NuvanceButton>

            <NuvanceButton variant="outline-gold" size="md" asChild>
              <a
                href="#tratamentos"
                aria-label="Ver tratamentos disponíveis"
              >
                {heroContent.cta.secondary}
              </a>
            </NuvanceButton>

          </div>
        </div>
      </div>
    </section>
  );
}