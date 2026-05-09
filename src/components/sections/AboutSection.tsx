import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/Reveal";
import { NuvanceButton } from "@/components/ui/NuvanceButton";
import { aboutContent } from "@/constants/content";

export default function AboutSection() {
  return (
    <SectionWrapper
      id="sobre"
      tone="light"
      className="h-auto py-24 md:py-32"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        <div className="relative group w-full order-1">

          <div className="mb-2 w-full lg:hidden">
            <div className="relative aspect-video w-full overflow-hidden rounded-[1.5rem] shadow-soft border border-white bg-petrol-soft/10">
              <img
                src="/images/about/team.webp"
                alt={aboutContent.mediaLabel}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute bottom-0 right-0 bg-gold text-petrol-deep px-4 py-2.5 rounded-tl-[1.5rem] shadow-elegant flex items-center gap-2 z-10">
                <span className="font-display text-xl font-bold italic leading-none">
                  {aboutContent.badge.value}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-black leading-none">
                  {aboutContent.badge.label}
                </span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <Reveal>
              <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-soft border border-white bg-petrol-soft/10">
                <img
                  src="/images/about/team.webp"
                  alt={aboutContent.mediaLabel}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover"
                />

                <div className="absolute bottom-0 right-0 bg-gold text-petrol-deep px-5 py-3 md:px-7 md:py-3.5 rounded-tl-[2rem] shadow-elegant z-30 flex items-center gap-2 max-w-[90%]">
                  <span className="font-display text-2xl md:text-3xl font-bold italic leading-none shrink-0">
                    {aboutContent.badge.value}
                  </span>
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-black leading-tight">
                    {aboutContent.badge.label}
                  </span>
                </div>
              </div>
            </Reveal>
            <div className="absolute -z-10 -bottom-4 -right-4 w-1/2 h-1/2 border border-gold/15 rounded-[2.5rem]" />
          </div>
        </div>

        <div className="flex flex-col items-start w-full order-2">
          <Reveal>
            <span className="eyebrow mb-5 block">
              {aboutContent.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display text-petrol-deep mb-6 text-3xl md:text-5xl leading-[1.1] md:leading-[1.2]">
              {aboutContent.title.main}{" "}
              <span className="italic text-gold font-light">
                {aboutContent.title.highlight}
              </span>{" "}
              {aboutContent.title.complement}
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-petrol-deep/75 mb-8 leading-relaxed text-base md:text-lg">
              {aboutContent.description}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="space-y-4 mb-10 w-full" role="list">
              {aboutContent.features.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-petrol-deep/85 font-medium group"
                >
                  <span className="h-2 w-2 rounded-full bg-gold shrink-0 mt-2 transition-transform group-hover:scale-125" aria-hidden="true" />
                  <span className="text-sm md:text-base leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="flex flex-wrap gap-4">
              <NuvanceButton variant="outline-petrol" size="md" asChild>
                <a 
                  href={aboutContent.cta.href}
                  className="whitespace-nowrap"
                >
                  {aboutContent.cta.label}
                </a>
              </NuvanceButton>
            </div>
          </Reveal>
        </div>

      </div>
    </SectionWrapper>
  );
}