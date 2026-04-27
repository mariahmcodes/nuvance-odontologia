import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/Reveal";
import { socialProofStats } from "@/constants/content";

export default function SocialProof() {
  return (
    <SectionWrapper tone="warm" className="!py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
        {socialProofStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="text-center">
              <div className="font-display text-5xl md:text-6xl text-petrol mb-2">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-[0.22em] text-petrol/60 font-semibold">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}