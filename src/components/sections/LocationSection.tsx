import { MapPin, Navigation } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/Reveal";
import { NuvanceButton } from "@/components/ui/NuvanceButton";
import { locationContent } from "@/constants/content";

export default function LocationSection() {
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    locationContent.mapQuery
  )}`;

  const embedSrc = `https://www.google.com/maps?q=${locationContent.mapEmbed}&output=embed`;

  return (
    <SectionWrapper id="localizacao" tone="light" className="!pb-0 md:!pb-20">
      {/* SEO LOCAL STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: locationContent.name,
            address: {
              "@type": "PostalAddress",
              streetAddress: locationContent.address.street,
              addressLocality: locationContent.address.city,
              addressRegion: locationContent.address.state,
              postalCode: locationContent.address.zip,
              addressCountry: locationContent.address.country,
            },
            telephone: locationContent.phone,
          }),
        }}
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="eyebrow mb-5">
              {locationContent.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display text-4xl md:text-5xl text-petrol-deep mb-6">
              {locationContent.title} <br />
              <span className="italic text-gold font-light">
                {locationContent.highlight}
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-petrol-deep/70 mb-10 max-w-md leading-relaxed">
              {locationContent.description}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex items-start gap-5 mb-10 group">
              <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                <MapPin size={20} className="text-gold-deep" />
              </div>

              <address className="not-italic">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-deep mb-1 font-bold">
                  {locationContent.addressLabel}
                </p>

                <p className="text-petrol-deep font-medium text-lg leading-snug">
                  {locationContent.address.street} <br />
                  <span className="text-petrol-deep/60 text-base">
                    {locationContent.address.district} —{" "}
                    {locationContent.address.city},{" "}
                    {locationContent.address.state} <br />
                    {locationContent.address.zip}
                  </span>
                </p>
              </address>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <NuvanceButton variant="petrol" size="lg" asChild>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-3"
                aria-label="Abrir localização da Nuvance no Google Maps"
              >
                Abrir no GPS <Navigation size={18} />
              </a>
            </NuvanceButton>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="order-1 lg:order-2 h-full">
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden border border-gold/10 shadow-elegant group">
            
            <div className="absolute inset-0 bg-petrol-deep/5 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500" />

            <iframe
              title="Localização da clínica Nuvance em Fortaleza"
              src={embedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </Reveal>

      </div>
    </SectionWrapper>
  );
}