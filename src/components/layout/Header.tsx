import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NuvanceButton } from "@/components/ui/NuvanceButton";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Profissionais", href: "#profissionais" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Casos", href: "#casos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-elegant",
        scrolled
          ? "bg-petrol-deep/85 backdrop-blur-md border-b border-gold/15"
          : "bg-transparent"
      )}
    >
      <div className="nuvance-container flex h-20 items-center justify-between">
        {/* Logo placeholder — trocar <div> por <img src="..."/> quando tiver */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-full bg-ivory/10 ring-1 ring-gold/40 transition-all group-hover:ring-gold" />
          <div className="leading-tight">
            <span className="font-display text-2xl text-ivory tracking-wide">
              Nuvance<span className="text-gold">.</span>
            </span>
            <span className="block text-[10px] uppercase tracking-[0.32em] text-ivory/60">
              Odontologia
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="story-link text-xs uppercase tracking-[0.22em] text-ivory/85 hover:text-ivory transition-colors"
            >
              {l.label}
            </a>
          ))}
          <NuvanceButton variant="gold" size="sm" asChild>
            <a href="#contato">Agendar</a>
          </NuvanceButton>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Abrir menu"
          className="lg:hidden p-2 text-ivory"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-petrol-deep/95 backdrop-blur-md border-t border-gold/15 animate-fade-in">
          <nav className="nuvance-container py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.22em] text-ivory/85 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
            <NuvanceButton variant="gold" size="md" asChild>
              <a href="#contato" onClick={() => setOpen(false)}>
                Agendar consulta
              </a>
            </NuvanceButton>
          </nav>
        </div>
      )}
    </header>
  );
}
