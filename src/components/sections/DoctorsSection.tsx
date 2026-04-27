import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { NuvanceCard } from "@/components/ui/NuvanceCard";
import Reveal from "@/components/Reveal";
import { doctors, doctorsSectionContent } from "@/constants/content";

function MediaPlaceholder({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`bg-muted/60 rounded-lg flex items-center justify-center overflow-hidden ${className}`}
      role="img"
      aria-label={label ?? "Imagem"}
    >
      {label && (
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 text-center px-4">
          {label}
        </span>
      )}
    </div>
  );
}

const liftHover = {
  y: -8,
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
};

export default function DoctorsSection() {
  return (
    <SectionWrapper id="profissionais" tone="dark" texture="gold-overlay">
      <div className="text-center mb-16">
        <Reveal>
          <span className="eyebrow mb-5">
            {doctorsSectionContent.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display text-ivory mb-5">
            {doctorsSectionContent.title}
          </h2>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {doctors.map((d, i) => (
          <Reveal key={d.name} delay={i * 0.1}>
            <motion.div whileHover={liftHover} className="h-full">
              <NuvanceCard
                variant="ghost"
                hover={false}
                className="h-full p-0 overflow-hidden border-gold/10 bg-petrol-deep/30"
              >
                <MediaPlaceholder
                  className="aspect-[4/3] !rounded-none bg-petrol-soft/40"
                  label={`Foto ${d.name}`}
                />

                <div className="p-8">
                  <h3 className="font-display text-2xl text-ivory mb-1">
                    {d.name}
                  </h3>

                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-5 font-bold">
                    {d.role}
                  </p>

                  <p className="text-ivory/70 mb-6 leading-relaxed text-sm">
                    {d.bio}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {d.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] uppercase tracking-[0.18em] px-3 py-1 rounded-full border border-gold/30 text-gold/80 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </NuvanceCard>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}