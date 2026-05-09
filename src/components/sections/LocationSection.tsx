import { useEffect, useState } from "react";
import { MapPin, Navigation } from "lucide-react";

import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/Reveal";
import { NuvanceButton } from "@/components/ui/NuvanceButton";

import { locationContent } from "@/constants/content";

export default function LocationSection() {
  const [loadMap, setLoadMap] = useState(false);

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    locationContent.mapQuery
  )}`;

  const embedSrc = `https://www.google.com/maps?q=${locationContent.mapEmbed}&output=embed`;

  useEffect(() => {
    const timer = setTimeout(() => setLoadMap(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SectionWrapper id="localizacao" tone="light" className="pb-20 md:pb-32">
      <section
        aria-labelledby="location-title"
        className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
      >
        <div className="space-y-10">

          <div>
            <Reveal>
              <span className="eyebrow mb-5 block text-gold-deep">
                {locationContent.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2
                id="location-title"
                className="font-display text-4xl md:text-5xl text-petrol-deep leading-tight"
              >
                {locationContent.title}
                <br />
                <span className="italic text-gold font-light">
                  {locationContent.highlight}
                </span>
              </h2>
            </Reveal>
          </div>

          {/* MAP MOBILE */}
          <Reveal delay={0.12}>
            <figure className="relative w-full aspect-square lg:hidden rounded-[2rem] overflow-hidden border border-white/10 shadow-elegant bg-petrol-deep/5">

              {!loadMap ? (
                <div className="absolute inset-0 flex items-center justify-center text-gold/60 text-sm">
                  Carregando mapa...
                </div>
              ) : (
                <iframe
                  title="Mapa da localização"
                  src={embedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[0.2] contrast-[1.1]"
                />
              )}

            </figure>
          </Reveal>

          <div>
            <Reveal delay={0.16}>
              <p className="text-petrol-deep/70 mb-10 max-w-md leading-relaxed">
                {locationContent.description}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex items-start gap-5 mb-10">
                <div className="h-11 w-11 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-gold-deep" />
                </div>

                <address className="not-italic">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold-deep mb-1 font-bold">
                    {locationContent.addressLabel}
                  </p>

                  <p className="text-petrol-deep font-medium text-lg leading-snug">
                    {locationContent.address.street}
                    <br />
                    <span className="text-petrol-deep/60 text-base">
                      {locationContent.address.district} —{" "}
                      {locationContent.address.city},{" "}
                      {locationContent.address.state}
                    </span>
                  </p>
                </address>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <NuvanceButton variant="petrol" size="md" asChild>
                <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                  <Navigation size={18} className="mr-2" />
                  Abrir no GPS
                </a>
              </NuvanceButton>
            </Reveal>
          </div>
        </div>

        {/* DESKTOP MAP */}
        <Reveal delay={0.1} className="hidden lg:block">
          <figure className="relative w-full h-[500px] rounded-[2rem] overflow-hidden border border-white/10 shadow-elegant bg-petrol-deep/5">

            {!loadMap ? (
              <div className="absolute inset-0 flex items-center justify-center text-gold/60">
                Carregando mapa...
              </div>
            ) : (
              <iframe
                title="Mapa da localização"
                src={embedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.2] contrast-[1.1]"
              />
            )}

          </figure>
        </Reveal>

      </section>
    </SectionWrapper>
  );
}