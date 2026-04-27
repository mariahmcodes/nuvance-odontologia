import { Phone, MapPin, MessageCircle, Instagram } from "lucide-react";
import goldTexture from "@/assets/gold-geometric-texture.png";

const companyData = {
  whatsapp: "5585992945489",
  phoneRaw: "85992945489", // Otimizado para discagem direta
  instagramUrl: "https://www.instagram.com/nuvanceodontologia/",
  address: "Av. Godofredo Maciel, 4000 — Fortaleza, CE",
};

export default function Footer() {
  const connections = [
    { 
      icon: Phone, 
      href: `tel:${companyData.phoneRaw}`, 
      label: "Ligar para a clínica" 
    },
    { 
      icon: MessageCircle, 
      href: `https://wa.me/${companyData.whatsapp}`, 
      label: "Falar no WhatsApp" 
    },
    { 
      icon: Instagram, 
      href: companyData.instagramUrl, 
      label: "Seguir no Instagram" 
    },
  ];

  return (
    <footer className="bg-petrol-deep text-ivory/80 relative overflow-hidden border-t border-gold/10">
      {/* TEXTURA GEOMÉTRICA: Unidade visual com a Hero */}
      <div
        aria-hidden="true"
        className="absolute inset-0 texture-gold-overlay opacity-15 pointer-events-none"
        style={{ ["--texture-gold-image" as string]: `url(${goldTexture})` }}
      />

      <div className="nuvance-container relative pt-24 pb-12">
        <div className="flex flex-col items-center text-center">
          
          {/* BRANDING: Logo centralizada estilo assinatura */}
          <div className="flex flex-col items-center gap-4 mb-12">
            <div className="h-14 w-14 rounded-full bg-ivory/5 ring-1 ring-gold/30 flex items-center justify-center">
               <div className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_12px_rgba(201,167,101,0.9)]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-4xl text-ivory tracking-tight">
                Nuvance<span className="text-gold">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold/70 -mt-1 font-medium">
                Odontologia
              </span>
            </div>
          </div>

          {/* LOCALIZAÇÃO E HORÁRIO: SEO Local amigável */}
          <div className="mb-14 space-y-4">
            <address className="not-italic text-sm tracking-wide text-ivory/80 flex items-center justify-center gap-2">
              <MapPin size={16} className="text-gold shrink-0" />
              {companyData.address}
            </address>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-[11px] uppercase tracking-[0.2em] text-gold/50 font-semibold">
              <span>Seg — Sex: 08h às 18h</span>
              <span className="hidden sm:block text-gold/20">•</span>
              <span>Sábado: 08h às 13h</span>
            </div>
          </div>

          {/* CONEXÕES: Botões de ação direta (Touch-friendly) */}
          <div className="flex gap-8 mb-24">
            {connections.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full border border-gold/20 text-gold 
                           hover:bg-gold hover:text-petrol-deep transition-all 
                           duration-500 flex items-center justify-center group
                           hover:shadow-[0_0_40px_rgba(201,167,101,0.3)] hover:-translate-y-1.5"
              >
                <item.icon className="w-7 h-7 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>

          {/* LINHA FINAL: Divisor de gradiente */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent mb-10" />
          
          {/* CRÉDITOS E LEGAL: Acessibilidade nota 10 */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 text-[9px] uppercase tracking-[0.3em] font-medium text-ivory/30">
            <span className="hover:text-ivory/50 transition-colors">
              © {new Date().getFullYear()} Nuvance Odontologia
            </span>
            <div className="flex items-center gap-4">
              <span>Fortaleza, CE</span>
              <span className="text-gold/20 hidden md:inline">|</span>
              <span className="hover:text-gold transition-colors cursor-default">
                Excelência Premium
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}