import { Quote } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/Reveal";
import CasesCarousel from "@/components/sections/CasesCarousel";

export default function CasesSection() {
  return (
    <SectionWrapper id="casos" tone="deep" texture="gold-overlay">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
        <div>
          <Reveal>
            <span className="eyebrow mb-5">Antes & depois</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-ivory">
              Transformações que falam por si
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <p className="max-w-md text-ivory/65 leading-relaxed">
            Cada caso é único. Veja como devolvemos confiança, função e beleza
            a centenas de pacientes.
          </p>
        </Reveal>
      </div>

      <CasesCarousel />

      <Reveal delay={0.2}>
        <div className="mt-20 max-w-3xl mx-auto text-center border-t border-gold/10 pt-16">
          <Quote size={32} className="text-gold mx-auto mb-8 opacity-40" />
          
          <blockquote className="font-display text-2xl md:text-4xl text-ivory leading-tight italic mb-8">
            "Recuperei mais que meu sorriso — recuperei a confiança de sorrir de novo."
          </blockquote>

          <cite className="text-xs uppercase tracking-[0.3em] text-gold not-italic font-bold">
            — Paciente Nuvance
          </cite>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}