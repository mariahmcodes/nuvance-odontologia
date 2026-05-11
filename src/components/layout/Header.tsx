import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { NuvanceButton } from "@/components/ui/NuvanceButton";
import { brandAssets, companyData, heroContent } from "@/constants/content";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Equipe", href: "#profissionais" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Resultados", href: "#casos" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Localização", href: "#localizacao" },
];

const navText =
  "text-[11px] font-medium uppercase tracking-[0.22em] text-ivory/80 hover:text-gold transition-colors";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const logo = brandAssets.logo;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out",
        scrolled || open
          ? "bg-petrol-deep/92 backdrop-blur-xl border-b border-gold/10 shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "nuvance-container flex items-center justify-between transition-all duration-500",
          scrolled ? "h-[68px]" : "h-24"
        )}
      >
        {/* Logo */}
        <a href="#hero" aria-label="Nuvance Odontologia" className="flex">
          <img
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            fetchPriority="high"
            className={cn(
              "h-auto w-[140px] md:w-[180px] object-contain transition-all duration-500",
              scrolled ? "scale-100" : "scale-[1.05]"
            )}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                navText,
                "relative after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              )}
            >
              {link.label}
            </a>
          ))}

          {/* Instagram vindo do content.ts */}
          <a
            href={companyData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold/80 hover:text-gold"
          >
            <Instagram size={18} strokeWidth={1.8} />
          </a>

          <NuvanceButton variant="gold" size="sm" asChild>
            <a href={heroContent.whatsappLink}>Agendar</a>
          </NuvanceButton>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/10 bg-white/[0.04] text-gold xl:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 xl:hidden",
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="nuvance-container flex flex-col gap-1 py-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={navText}
            >
              {link.label}
            </a>
          ))}

          <a
            href={companyData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={navText}
          >
            Instagram
          </a>

          <a
            href={heroContent.whatsappLink}
            onClick={() => setOpen(false)}
            className={navText}
          >
            Agendar
          </a>
        </nav>
      </div>
    </header>
  );
}