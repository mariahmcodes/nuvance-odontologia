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

          <Reveal delay={0.05}>
            <h2
              id="doctors-title"
              className="font-display text-ivory text-4xl md:text-5xl mb-5"
            >
              {doctorsSectionContent.title}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-2xl mx-auto text-ivory/65">
              {doctorsSectionContent.description}
            </p>
          </Reveal>
        </header>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {doctors.map((d, index) => (
            <Reveal key={d.name} delay={0.12 + index * 0.05}>
              <article className="
                h-full overflow-hidden rounded-2xl border border-white/10
                bg-petrol-deep/30 backdrop-blur-md
                transition-all duration-500 ease-out
                hover:-translate-y-3 hover:border-gold/30
                group
              ">
                <div className="aspect-[4/5] w-full overflow-hidden bg-petrol-deep/50">
                  <img
                    src={d.image}
                    alt={`Dr(a). ${d.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={750}
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-display text-ivory mb-1 group-hover:text-gold transition-colors">
                        {d.name}
                      </h3>
                      <p className="text-gold-soft font-medium text-sm uppercase tracking-wider">
                        {d.role}
                      </p>
                    </div>
                    
                    {d.instagram && (
                      <a 
                        href={d.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 text-ivory hover:bg-gold hover:text-petrol-deep transition-all duration-300"
                        aria-label={`Instagram de ${d.name}`}
                      >
                        <Instagram size={20} />
                      </a>
                    )}
                  </div>

                  <p className="text-ivory/70 text-sm leading-relaxed mb-6">
                    {d.bio}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {d.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-ivory/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}