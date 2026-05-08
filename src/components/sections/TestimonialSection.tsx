import { useState, useRef } from "react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/Reveal";
import { PlayButton } from "@/components/ui/PlayButton";
import { testimonialsContent } from "@/constants/content";
import { cn } from "@/lib/utils";

export default function TestimonialsSection() {
  const { video } = testimonialsContent;

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = async () => {
    if (!videoRef.current) return;

    const videoEl = videoRef.current;

    try {
      if (videoEl.paused) {
        videoEl.muted = false;
        await videoEl.play();
        setIsPlaying(true);
      } else {
        videoEl.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SectionWrapper
      id="depoimento"
      tone="warm"
      className="overflow-hidden py-24 md:py-32"
    >
      <div className="nuvance-container flex flex-col items-center">
        <header className="mb-14 text-center md:mb-20">
          <Reveal>
            <span className="eyebrow mb-5 block text-gold-deep">
              {testimonialsContent.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl leading-tight text-petrol-deep md:text-5xl">
              {testimonialsContent.title}
            </h2>
          </Reveal>
        </header>

        <div className="relative w-full max-w-[320px] md:max-w-[380px]">
          <Reveal delay={0.2}>
            <div
              className={cn(
                "relative aspect-[9/16]",
                "overflow-hidden rounded-[2.5rem]",
                "border-[6px] border-petrol-deep",
                "bg-black shadow-2xl",
                "md:rounded-[3rem] md:border-[10px]",
                "group cursor-pointer"
              )}
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src={`${video.src}#t=0.001`}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover scale-[1.03] transition-all duration-700",
                  !isPlaying
                    ? "opacity-80 scale-[1.06]"
                    : "opacity-100 scale-[1.03]"
                )}
                controls={isPlaying}
                playsInline
                preload="metadata"
                muted
              />

              {!isPlaying && (
                <>
                  <div className="absolute inset-0 z-20 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />

                  <div className="absolute inset-0 z-30 flex items-center justify-center">
                    <div className="transform transition-transform duration-300 group-hover:scale-110">
                      <PlayButton />
                    </div>
                  </div>
                </>
              )}
            </div>
          </Reveal>

          <div
            className="absolute inset-0 -z-10 scale-125 rounded-full bg-gold/15 blur-[80px] opacity-40"
            aria-hidden="true"
          />
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-[10px] font-black uppercase tracking-[0.4em] text-gold-deep">
            Nuvance Experience
          </p>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}