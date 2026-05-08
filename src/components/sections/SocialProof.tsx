import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/Reveal";
import { socialProofStats } from "@/constants/content";

export default function SocialProof() {
  return (
    <SectionWrapper
      tone="warm"
      className="!py-20"
      aria-label="Estatísticas da clínica"
    >
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6"
        role="list"
      >
        {socialProofStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="text-center" role="listitem">
              <div
                className="font-display text-4xl md:text-6xl text-petrol mb-2 leading-none"
                aria-hidden="true"
              >
                {s.value}
              </div>

              <div className="text-xs uppercase tracking-[0.22em] text-petrol/60 font-semibold">
                {s.label}
              </div>

              <span className="sr-only">
                {s.label} com valor de {s.value}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}