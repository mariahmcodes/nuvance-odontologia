import { Phone, MapPin, MessageCircle, Clock, Instagram } from "lucide-react";
import goldTexture from "@/assets/gold-geometric-texture.png";

export default function Footer() {
  return (
    <footer className="bg-petrol-deep text-ivory/80 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 texture-gold-overlay"
        style={{ ["--texture-gold-image" as string]: `url(${goldTexture})` }}
      />

      <div className="nuvance-container relative pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Marca */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-full bg-ivory/10 ring-1 ring-gold/40" />
              <span className="font-display text-2xl text-ivory">
                Nuvance<span className="text-gold">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-ivory/65">
              Odontologia premium com 25 anos de excelência. Implantes, estética e
              reabilitação oral em um ambiente pensado pra você.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display text-xl text-gold mb-5">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold" />
                (85) 3025-1414
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={14} className="text-gold" />
                (85) 99825-1414
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={14} className="text-gold" />
                @nuvance.odontologia
              </li>
            </ul>
          </div>

          {/* Endereço */}
          <div>
            <h4 className="font-display text-xl text-gold mb-5">Endereço</h4>
            <p className="text-sm flex items-start gap-3 leading-relaxed">
              <MapPin size={14} className="text-gold mt-1 shrink-0" />
              Av. Godofredo Maciel, 4000
              <br />
              Fortaleza — CE
            </p>
          </div>

          {/* Horário */}
          <div>
            <h4 className="font-display text-xl text-gold mb-5">Horário</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Clock size={14} className="text-gold" />
                Seg–Sex: 8h às 18h
              </li>
              <li className="flex items-center gap-3">
                <Clock size={14} className="text-gold" />
                Sábado: 8h às 13h
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-divider my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/50 uppercase tracking-[0.2em]">
          <span>© {new Date().getFullYear()} Nuvance Odontologia</span>
          <span>Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  );
}