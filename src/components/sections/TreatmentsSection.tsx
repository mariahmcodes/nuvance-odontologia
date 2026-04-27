import { motion } from "framer-motion";
import { Smile, Sparkles, Award, Heart } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { NuvanceCard } from "@/components/ui/NuvanceCard";
import Reveal from "@/components/Reveal";

/** 그대로, sem mexer */
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

/** Mesmo hover */
const liftHover = {
  y: -8,
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
};

export default function TreatmentsSection() {
  return (
    <SectionWrapper id="tratamentos" tone="light">
      <div className="text-center mb-16">
        <Reveal>
          <span className="eyebrow mb-5">Tratamentos</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-petrol-deep">
            Soluções pensadas pra cada etapa do seu sorriso
          </h2>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {treatments.map((t, i) => {
          const Icon = t.icon;

          return (
            <Reveal key={t.title} delay={i * 0.06}>
              <motion.div whileHover={liftHover} className="h-full">
                <NuvanceCard
                  variant="light"
                  hover={false}
                  className="h-full transition-all duration-400 hover:border-gold/40 border-transparent"
                >
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                    <Icon className="text-gold-deep" size={22} />
                  </div>

                  <h3 className="font-display text-2xl text-petrol-deep mb-3">
                    {t.title}
                  </h3>

                  <p className="text-sm text-petrol-deep/70 leading-relaxed">
                    {t.desc}
                  </p>
                </NuvanceCard>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}