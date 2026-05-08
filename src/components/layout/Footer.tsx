import { Phone, MapPin, MessageCircle, Instagram } from "lucide-react";

const companyData = {
  whatsapp: "5585992945489",
  phoneRaw: "85992945489",
  instagramUrl: "https://www.instagram.com/nuvanceodontologia/",
  address: "Av. Godofredo Maciel, 4000 — Fortaleza, CE",
};

export default function Footer() {
  const connections = [
    { icon: Phone, href: `tel:${companyData.phoneRaw}`, label: "Ligar" },
    { icon: MessageCircle, href: `https://wa.me/${companyData.whatsapp}`, label: "WhatsApp" },
    { icon: Instagram, href: companyData.instagramUrl, label: "Instagram" },
  ];

  return (
    <footer className="bg-petrol-deep text-ivory/70 border-t border-gold/10 relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-petrol-deep via-petrol to-petrol-deep" />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 bg-[url('/gold-geometric-texture.webp')] bg-cover bg-center"
        />

        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="nuvance-container relative py-6 md:py-8">
        <div className="flex flex-col items-center text-center">

          <div className="mb-4 transition-transform duration-500 hover:scale-105">
            <img 
              src="/logo2.png" 
              alt="Nuvance Odontologia" 
              className="h-28 md:h-40 w-auto object-contain drop-shadow-xl"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            <address className="not-italic text-sm text-ivory/80 flex items-center gap-2 hover:text-gold transition-colors">
              <MapPin size={16} className="text-gold" />
              <a
                href="https://maps.google.com/?q=Av.+Godofredo+Maciel,+4000+Fortaleza+CE"
                target="_blank"
                rel="noopener noreferrer"
              >
                {companyData.address}
              </a>
            </address>

            <div className="flex gap-4">
              {connections.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-10 h-10 rounded-full border border-gold/20 text-gold flex items-center justify-center hover:bg-gold hover:text-petrol-deep transition-all duration-300"
                >
                  <item.icon size={16} />
                </a>
              ))}
            </div>

            <p className="text-[10px] uppercase tracking-[0.25em] text-ivory/40">
              Seg–Sex • 08h–13h • 14h–18h
            </p>
          </div>
        </div>

        <div className="w-16 h-px bg-gold/20 mx-auto my-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[9px] uppercase tracking-[0.3em] text-ivory/20">
          <span>© {new Date().getFullYear()} Nuvance odontologia</span>
          <div className="flex gap-3">
            <span>Todos os direitos reservados</span>
          </div>
        </div>
      </div>
    </footer>
  );
}