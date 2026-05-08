import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { NuvanceButton } from "@/components/ui/NuvanceButton";

const WHATSAPP_LINK =
  "https://wa.me/5585992945489?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20na%20Nuvance.";

const INSTAGRAM_LINK =
  "https://www.instagram.com/nuvanceodontologia/";

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
        <a
          href="#hero"
          aria-label="Nuvance Odontologia"
          className="flex shrink-0 items-center"
        >
          <div className="relative flex w-28 items-center justify-center md:w-36 xl:w-48">
            <img
              src="/logo.webp"
              alt="Nuvance Odontologia"
              fetchPriority="high"
              className={cn(
                "h-auto w-full object-contain transition-all duration-500",
                scrolled ? "scale-100" : "scale-[1.05]"
              )}
            />
          </div>
        </a>

        <nav
          aria-label="Menu principal"
          className="hidden items-center gap-10 xl:flex"
        >
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

          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Nuvance"
            className="text-gold/80 transition-colors duration-300 hover:text-gold"
          >
            <Instagram size={18} strokeWidth={1.8} />
          </a>

          <NuvanceButton
            variant="gold"
            size="sm"
            asChild
            className="rounded-full px-6 text-[11px] font-medium uppercase tracking-[0.22em]"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar
            </a>
          </NuvanceButton>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="relative z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-gold/10 bg-white/[0.04] text-gold backdrop-blur-md transition-all duration-300 active:scale-90 xl:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out xl:hidden",
          open
            ? "max-h-[600px] border-t border-gold/10 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <div className="bg-petrol-deep/95 backdrop-blur-2xl">
          <nav className="nuvance-container flex flex-col gap-1 py-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  navText,
                  "flex min-h-[52px] items-center border-b border-white/[0.04] px-1"
                )}
                style={{ transitionDelay: `${index * 45}ms` }}
              >
                {link.label}
              </a>
            ))}

            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[52px] items-center gap-3 border-b border-white/[0.04] px-1 text-[11px] font-medium uppercase tracking-[0.22em] text-gold/80 transition-colors duration-300 hover:text-gold"
            >
              <Instagram size={15} />
              Instagram
            </a>

            <div className="pt-6">
              <NuvanceButton
                variant="gold"
                size="md"
                asChild
                className="w-full rounded-full text-[11px] font-medium uppercase tracking-[0.22em]"
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Agendar consulta
                </a>
              </NuvanceButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}