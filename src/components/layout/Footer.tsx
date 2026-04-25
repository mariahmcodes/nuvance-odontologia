import { Phone, MapPin, Mail, Clock } from "lucide-react";

/**
 * Footer - Rodapé com informações de contato e links
 */
export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Nuvance<span className="text-yellow-400">.</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Transformando sorrisos e vidas há mais de 15 anos com excelência e humanidade.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(85) 3025-1414</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(85) 99825-1414</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>contato@nuvance.com.br</span>
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div>
            <h4 className="font-semibold mb-4">Localização</h4>
            <div className="flex items-start gap-2 text-sm text-gray-300">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <span>Av. Godofredo Maciel, 4000<br />Fortaleza, CE</span>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h4 className="font-semibold mb-4">Horário</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Seg-Sex: 8h-18h</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Sábado: 8h-13h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2026 Nuvance Odontologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
