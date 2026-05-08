import { useEffect, useState } from "react";

import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/Reveal";
import { PlayButton } from "@/components/ui/PlayButton";
import { videoSectionContent } from "@/constants/content";
import { cn } from "@/lib/utils";

export default function VideoSection() {
  const videoId = "nKs2bcq_BFY";

  const thumbUrl = "/images/video-thumb.webp";

  const embedUrl =
    `https://www.youtube-nocookie.com/embed/${videoId}` +
    `?autoplay=1` +
    `&rel=0` +
    `&modestbranding=1` +
    `&playsinline=1` +
    `&controls=1`;

  const [isStarted, setIsStarted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preconnects = [
      "https://www.youtube-nocookie.com",
      "https://www.youtube.com",
      "https://i.ytimg.com",
      "https://googleads.g.doubleclick.net",
    ];

    preconnects.forEach((href) => {
      const link = document.createElement("link");

      link.rel = "preconnect";
      link.href = href;
      link.crossOrigin = "";

      document.head.appendChild(link);
    });
  }, []);

  return (
    <SectionWrapper
      id="video"
      tone="warm"
      className="overflow-hidden py-24 md:py-32"
    >
      <div className="nuvance-container relative z-10">
        <header className="mb-12 text-center md:mb-20">
          <Reveal>
            <span className="eyebrow mb-5 block">
              {videoSectionContent.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display text-4xl leading-[1.1] text-petrol-deep md:text-6xl">
              {videoSectionContent.title}
            </h2>
          </Reveal>
        </header>

        <div className="group relative mx-auto max-w-[320px] md:max-w-[380px]">
          <Reveal delay={0.15}>
            <div
              className={cn(
                "relative aspect-[9/16] w-full overflow-hidden",
                "rounded-[2.5rem]",
                "border-[6px] border-petrol-deep",
                "bg-black shadow-2xl",
                "md:rounded-[3rem] md:border-[10px]"
              )}
            >
              <img
                src={thumbUrl}
                alt=""
                loading="eager"
                fetchPriority="high"
                className={cn(
                  "absolute inset-0 z-20 h-full w-full object-cover",
                  "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isLoaded &&
                    "pointer-events-none scale-105 opacity-0"
                )}
              />

              {isStarted && (
                <iframe
                  src={embedUrl}
                  title={videoSectionContent.video.ariaLabel}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="eager"
                  onLoad={() => {
                    requestAnimationFrame(() => {
                      setTimeout(() => {
                        setIsLoaded(true);
                      }, 120);
                    });
                  }}
                  className={cn(
                    "absolute inset-0 z-10 h-full w-full pointer-events-auto",
                    "transition-opacity duration-500",
                    isLoaded ? "opacity-100" : "opacity-0"
                  )}
                />
              )}

              {!isStarted && (
                <button
                  type="button"
                  aria-label={videoSectionContent.video.ariaLabel}
                  onClick={() => setIsStarted(true)}
                  className="absolute inset-0 z-30 flex items-center justify-center"
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    <PlayButton />
                  </div>

                  <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />
                </button>
              )}

              {isStarted && !isLoaded && (
                <div className="absolute inset-0 z-15 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
                </div>
              )}
            </div>
          </Reveal>

          <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-gold/15 blur-[80px] opacity-40" />
        </div>
      </div>
    </SectionWrapper>
  );
}