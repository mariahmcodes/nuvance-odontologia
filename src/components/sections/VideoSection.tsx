import { useState, useEffect } from "react";
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
    `?autoplay=1&rel=0&modestbranding=1&playsinline=1&controls=1`;

  useEffect(() => {
    const links = [
      "https://www.youtube-nocookie.com",
      "https://www.youtube.com",
      "https://i.ytimg.com",
    ];

    links.forEach((href) => {
      const el = document.createElement("link");
      el.rel = "preconnect";
      el.href = href;
      el.crossOrigin = "";
      document.head.appendChild(el);
    });
  }, []);

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

              {/* THUMB nunca some até iframe estar OK */}
              <img
                src={thumbUrl}
                alt=""
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
                    // garante que iframe já pintou algo
                    setTimeout(() => setLoaded(true), 150);
                  }}
                  className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
                    loaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}

              {!started && (
                <button
                  onClick={() => setStarted(true)}
                  aria-label={videoSectionContent.video.ariaLabel}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <PlayButton />
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </SectionWrapper>
  );
}