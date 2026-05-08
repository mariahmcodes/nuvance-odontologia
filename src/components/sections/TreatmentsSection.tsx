import { Smile, Sparkles, Award, Heart } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { NuvanceCard } from "@/components/ui/NuvanceCard";
import Reveal from "@/components/Reveal";

const treatments = [
  {
    icon: Smile,
    title: "Implantes Dentários",
    desc: "Reabilitação completa com técnica de carga imediata e precisão digital.",
  },
  {
    icon: Sparkles,
    title: "Facetas & Lentes",
    desc: "Transformação estética minimamente invasiva, com naturalidade absoluta.",
  },
  {
    icon: Award,
    title: "Reabilitação Oral",
    desc: "Devolvemos função, conforto e beleza ao seu sorriso por completo.",
  },
  {
    icon: Heart,
    title: "Odontologia Digital",
    desc: "Planejamento 3D, scanner intraoral e previsibilidade em cada etapa.",
  },
];

export default function TreatmentsSection() {
  return (
    <SectionWrapper id="tratamentos" tone="light" className="py-24 md:py-32">
      <header className="mb-14 text-center md:mb-20">
        <Reveal>
          <span className="eyebrow mb-5 block">
            Tratamentos odontológicos
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl leading-tight text-petrol-deep md:text-5xl">
            Soluções pensadas pra cada etapa do seu sorriso
          </h2>
        </Reveal>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
        {treatments.map((t, i) => {
          const Icon = t.icon;

          return (
            <Reveal key={t.title} delay={0.3 + i * 0.08}>
              <div className="group h-full">
                <NuvanceCard
                  variant="light"
                  hover={false}
                  className="
                    h-full border border-black/20 bg-white/95
                    shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                    transition-all duration-500

                    lg:border-black/12
                    lg:bg-white
                    lg:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]

                    active:scale-[0.98]
                    md:group-hover:-translate-y-2
                    md:group-hover:border-gold/40
                    md:group-hover:shadow-2xl
                    md:group-hover:shadow-gold/5
                  "
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 transition-colors group-hover:bg-gold/20">
                    <Icon className="text-gold-deep" size={24} />
                  </div>

                  <h3 className="mb-3 font-display text-xl text-petrol-deep transition-colors group-hover:text-gold-deep md:text-2xl">
                    {t.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-petrol-deep/85 lg:text-petrol-deep/75">
                    {t.desc}
                  </p>

                  <span className="sr-only">
                    Serviço odontológico: {t.title}. {t.desc}
                  </span>
                </NuvanceCard>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}