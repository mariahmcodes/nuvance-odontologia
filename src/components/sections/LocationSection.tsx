import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/Reveal";
import { NuvanceButton } from "@/components/ui/NuvanceButton";

export default function LocationSection() {
  return (
    <SectionWrapper id="localizacao" tone="light">
      <div className="text-center mb-14">
        <Reveal>
          <span className="eyebrow mb-5">Onde estamos</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-petrol-deep">
            Visite a Nuvance em Fortaleza
          </h2>
        </Reveal>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-stretch">
        {/* Mapa */}
        <Reveal>
          <div className="relative w-full h-full min-h-[380px] rounded-xl overflow-hidden border border-border shadow-soft">
            <iframe
              title="Localização Nuvance Odontologia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.4!2d-38.5!3d-3.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDcnMDAuMCJTIDM4wrAzMCcwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </Reveal>

        {/* NAP */}
        <Reveal delay={0.1}>
          <div className="h-full flex flex-col justify-center">
            <h3 className="font-display text-3xl text-petrol-deep mb-2">
              Nuvance Odontologia
            </h3>
            <p className="text-sm uppercase tracking-[0.22em] text-gold mb-8">
              Clínica premium · Fortaleza/CE
            </p>

            <ul className="space-y-6 mb-10">
              <li className="flex items-start gap-4">
                <span className="h-10 w-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-gold-deep" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-petrol-deep/55 mb-1">
                    Endereço
                  </p>
                  <address className="not-italic text-petrol-deep/85 leading-relaxed">
                    Av. Godofredo Maciel, 4000
                    <br />
                    Maraponga · Fortaleza — CE
                  </address>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="h-10 w-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-gold-deep" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-petrol-deep/55 mb-1">
                    Telefone
                  </p>
                  <a
                    href="tel:+558530251414"
                    className="text-petrol-deep/85 hover:text-gold-deep transition-colors"
                  >
                    (85) 3025-1414
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="h-10 w-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                  <MessageCircle size={16} className="text-gold-deep" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-petrol-deep/55 mb-1">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/5585998251414"
                    target="_blank"
                    rel="noreferrer"
                    className="text-petrol-deep/85 hover:text-gold-deep transition-colors"
                  >
                    (85) 99825-1414
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="h-10 w-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-gold-deep" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-petrol-deep/55 mb-1">
                    Horário
                  </p>
                  <p className="text-petrol-deep/85 leading-relaxed">
                    Seg–Sex: 8h às 18h
                    <br />
                    Sábado: 8h às 13h
                  </p>
                </div>
              </li>
            </ul>

            <div>
              <NuvanceButton variant="petrol" asChild>
                <a
                  href="https://www.google.com/maps/dir//Av.+Godofredo+Maciel,+4000,+Fortaleza"
                  target="_blank"
                  rel="noreferrer"
                >
                  Como chegar
                </a>
              </NuvanceButton>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}