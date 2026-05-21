import { Phone, MapPin, MessageCircle, Instagram } from "lucide-react";
import { brandAssets, companyData } from "@/constants/content";
import { trackEvent } from "@/lib/analytics";

const connections = [
  {
    icon: Phone,
    href: `tel:${companyData.phoneRaw}`,
    label: "Ligar",
  },
  {
    icon: MessageCircle,
    href: companyData.whatsappLink,
    label: "WhatsApp",
    event: "whatsapp_footer",
  },
  {
    icon: Instagram,
    href: companyData.instagramUrl,
    label: "Instagram",
  },
];

export default function Footer() {
  const logoFooter = brandAssets.footerLogo;

  return (
    <footer className="bg-petrol-deep text-ivory/70 border-t border-gold/10 relative overflow-hidden">

      {/* Background system */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-petrol-deep via-petrol to-petrol-deep" />
        <div className="absolute inset-0 texture-gold-overlay" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="nuvance-container relative py-10 md:py-14">

        <div className="flex flex-col items-center text-center">

          <img
            src={logoFooter.src}
            alt={logoFooter.alt}
            width={logoFooter.width}
            height={logoFooter.height}
            className="h-32 md:h-44 w-auto object-contain"
          />

          <address className="not-italic mt-6 text-sm flex items-center gap-2">
            <MapPin size={16} className="text-gold" />

            <a
              href={companyData.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {companyData.address}
            </a>

          </address>

          <div className="flex gap-4 mt-4">

            {connections.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                onClick={() => item.event && trackEvent(item.event)}
                className="w-10 h-10 rounded-full border border-gold/20 text-gold flex items-center justify-center hover:bg-gold hover:text-petrol-deep transition"
              >
                <item.icon size={16} />
              </a>
            ))}

          </div>

          <p className="text-[10px] uppercase tracking-[0.25em] text-ivory/40 mt-4">
            {companyData.schedule}
          </p>

        </div>

        <div className="w-16 h-px bg-gold/20 mx-auto my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[9px] uppercase tracking-[0.3em] text-ivory/20">
          <span>© {new Date().getFullYear()} Nuvance Odontologia</span>
          <span>Todos os direitos reservados</span>
        </div>

      </div>

    </footer>
  );
}