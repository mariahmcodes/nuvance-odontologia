import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/Reveal";

/**
 * VideoSection — slot premium para vídeo institucional (drone).
 * Substitua o <div> placeholder por:
 *   <video src="/videos/drone.mp4" autoPlay muted loop playsInline preload="metadata" loading="lazy" />
 */
export default function VideoSection() {
  return (
    <SectionWrapper id="video" tone="warm" className="!py-24">
      <div className="text-center mb-12">
        <Reveal>
          <span className="eyebrow mb-5">A clínica em movimento</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-petrol-deep">
            Um tour pelo nosso espaço
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <div className="relative mx-auto max-w-6xl rounded-2xl overflow-hidden border border-gold/30 shadow-elegant bg-petrol-deep aspect-video">
          {/* Slot de vídeo: substituir pelo <video> real */}
          <div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-petrol-deep via-petrol to-petrol-deep"
            role="img"
            aria-label="Vídeo institucional da clínica Nuvance"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/40">
              Vídeo institucional · Drone
            </span>
          </div>
          {/*
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/drone.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            loading="lazy"
          />
          */}
          <div className="absolute inset-0 ring-1 ring-inset ring-gold/20 rounded-2xl pointer-events-none" />
        </div>
      </Reveal>
    </SectionWrapper>
  );
}