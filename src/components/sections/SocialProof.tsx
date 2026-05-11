import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/Reveal";

import { socialProofStats } from "@/constants/content";

export default function SocialProof() {
  return (
    <SectionWrapper
      tone="warm"
      className="!py-20"
      aria-labelledby="social-proof-title"
    >
      <section>
        <h2 id="social-proof-title" className="sr-only">
          Estatísticas da clínica
        </h2>

        <div
          role="list"
          className="
            grid grid-cols-2 md:grid-cols-4
            gap-10 md:gap-6
          "
        >
          {socialProofStats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.06}
            >
              <article
                role="listitem"
                className="text-center"
              >
                <div
                  aria-hidden="true"
                  className="
                    font-display
                    text-4xl md:text-6xl
                    leading-none
                    text-petrol
                    mb-2
                  "
                >
                  {s.value}
                </div>

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-petrol/60
                  "
                >
                  {s.label}
                </p>

                <span className="sr-only">
                  {s.label} com valor de {s.value}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}