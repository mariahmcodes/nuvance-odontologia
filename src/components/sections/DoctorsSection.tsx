import { Instagram } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/Reveal";
import { doctors, doctorsSectionContent } from "@/constants/content";

export default function DoctorsSection() {
  return (
    <SectionWrapper
      id="profissionais"
      tone="dark"
      texture="gold-overlay"
      aria-labelledby="doctors-title"
    >
      <section className="w-full relative z-10">

        <header className="text-center mb-16">
          <Reveal>
            <span className="eyebrow mb-5 block">
              {doctorsSectionContent.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              id="doctors-title"
              className="font-display text-ivory text-4xl md:text-5xl mb-5"
            >
              {doctorsSectionContent.title}
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-2xl mx-auto text-ivory/65">
              {doctorsSectionContent.description}
            </p>
          </Reveal>
        </header>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">

          {doctors.map((d, i) => {
            const rowDelay = Math.floor(i / 2) * 0.2;
            const finalDelay = 0.4 + rowDelay;

            return (
              <Reveal key={d.name} delay={finalDelay}>
                <article className="
                  h-full overflow-hidden rounded-2xl border border-white/10
                  bg-petrol-deep/30 backdrop-blur-md
                  transition-all duration-500 ease-out
                  hover:-translate-y-3 hover:border-gold/30
                  group
                ">

                  <div className="aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={d.image}
                      alt={`Dr(a). ${d.name}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6 md:p-10">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="font-display text-2xl md:text-3xl text-ivory">
                        {d.name}
                      </h3>

                      {d.instagram && (
                        <a
                          href={d.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold/40 hover:text-gold transition-colors"
                          aria-label={`Instagram de ${d.name}`}
                        >
                          <Instagram size={20} />
                        </a>
                      )}
                    </div>

                    <p className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-5 font-bold">
                      {d.role}
                    </p>

                    <p className="text-ivory/70 mb-8 leading-relaxed text-sm md:text-base border-l border-gold/20 pl-4">
                      {d.bio}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {d.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] uppercase tracking-[0.15em] px-4 py-1.5 rounded-full border border-white/5 text-ivory/60 bg-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}

        </div>
      </section>
    </SectionWrapper>
  );
}