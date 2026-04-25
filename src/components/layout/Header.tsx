import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Header - Componente de navegação principal
 * Logo + Menu de navegação com mobile responsivo
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Profissionais", href: "#profissionais" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Casos", href: "#casos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-900">
              Nuvance
              <span className="text-yellow-500">.</span>
            </h1>
            <p className="text-xs text-gray-600">Odontologia</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Agendar
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-blue-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-700 hover:text-blue-900 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="block bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg font-semibold text-center hover:bg-yellow-300 transition-colors mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Agendar
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
