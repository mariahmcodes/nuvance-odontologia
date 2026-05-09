import { useState } from "react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/Reveal";
import { PlayButton } from "@/components/ui/PlayButton";
import { videoSectionContent } from "@/constants/content";

export default function VideoSection() {
  const videoId = "nKs2bcq_BFY";
  const thumbUrl = "/images/video-thumb.webp";

  const [started, setStarted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const embedUrl =
    `https://www.youtube-nocookie.com/embed/${videoId}` +
    `?autoplay=1&rel=0&modestbranding=1&playsinline=1&controls=1&mute=0`;

  return (
    <SectionWrapper
      id="video"
      tone="warm"
      className="overflow-hidden py-24 md:py-32"
    >
      <div className="nuvance-container">
        <header className="mb-12 text-center md:mb-20">
          <Reveal>
            <span className="eyebrow mb-5 block">
              {videoSectionContent.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display text-4xl md:text-6xl text-petrol-deep">
              {videoSectionContent.title}
            </h2>
          </Reveal>
        </header>

        <div className="relative mx-auto max-w-[380px]">
          <Reveal delay={0.15}>
            <div className="relative aspect-[9/16] overflow-hidden rounded-[2.5rem] border-[6px] border-petrol-deep bg-black shadow-2xl">
            
              <img
                src={thumbUrl}
                alt="Thumbnail do vídeo institucional"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  loaded ? "opacity-0" : "opacity-100"
                }`}
                loading="lazy"
              />

              {started && (
                <iframe
                  src={embedUrl}
                  title={videoSectionContent.video.ariaLabel}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  onLoad={() => {
                    setTimeout(() => setLoaded(true), 200);
                  }}
                  className={`absolute inset-0 h-full w-full transition-opacity duration-500 z-10 ${
                    loaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}

              {!started && (
                <button
                  onClick={() => setStarted(true)}
                  aria-label={videoSectionContent.video.ariaLabel}
                  className="absolute inset-0 flex items-center justify-center z-20 group"
                >
                  <div className="transform transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                    <PlayButton />
                  </div>
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </SectionWrapper>
  );
}