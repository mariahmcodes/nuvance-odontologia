import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import NuvanceButton from "@/components/ui/NuvanceButton";
import NuvanceCard from "@/components/ui/NuvanceCard";
import { Smile, Sparkles, Award, Heart } from "lucide-react";

/**
 * Home - Landing page completa da Nuvance Odontologia
 * 
 * Seções:
 * 1. Hero - Apresentação principal
 * 2. Sobre - Missão e valores
 * 3. Profissionais - Dr. Thiago e Dra. Juliana
 * 4. Especialidades - Serviços oferecidos
 * 5. Casos - Transformações
 * 6. Infraestrutura - Tecnologia
 * 7. Contato - CTA e informações
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=700&fit=crop')"
        }} />

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/60" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center text-white py-20 md:py-32">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-400/40">
                ✨ Transformando Sorrisos há 15+ Anos
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Seu Sorriso Perfeito
              <br />
              <span className="text-yellow-400">Começa Aqui</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
              Especialistas em implantes dentários, facetas e estética dental. 
              Tecnologia de ponta e atendimento humanizado para transformar sua vida.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NuvanceButton variant="secondary" size="lg">
                Agendar Consulta
              </NuvanceButton>
              <NuvanceButton variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Conhecer Mais
              </NuvanceButton>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOBRE SECTION ===== */}
      <SectionWrapper id="sobre" bgColor="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="relative h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <span className="text-gray-500 text-center">
                Imagem: Clínica / Profissionais<br />(Adicione aqui)
              </span>
            </div>
          </div>

          {/* Conteúdo */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wide">
                Sobre Nós
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Transformando Sorrisos,
              <br />
              Transformando Vidas
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              A Nuvance Odontologia é uma clínica especializada em implantes dentários, 
              facetas e estética dental. Com mais de 15 anos de experiência, somos referência 
              em transformações que vão além do sorriso.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Especialistas com mais de 15 anos de experiência",
                "Tecnologia de ponta e equipamentos modernos",
                "Atendimento humanizado e personalizado",
                "Suporte completo pré e pós-operatório"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mt-1">
                    <span className="text-blue-900 font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <NuvanceButton variant="primary" size="lg">
              Saiba Mais Sobre Nós
            </NuvanceButton>
          </div>
        </div>
      </SectionWrapper>

      {/* ===== PROFISSIONAIS SECTION ===== */}
      <SectionWrapper id="profissionais" bgColor="light-gray">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wide">
            Nosso Time
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2 mb-4">
            Especialistas Dedicados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Conheça os profissionais que transformam sorrisos com excelência e humanidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Dr. Thiago */}
          <NuvanceCard variant="elevated">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-center">Foto</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Dr. Thiago Carvalho</h3>
              <p className="text-yellow-500 font-semibold mb-4">Implantodontista | CRO CE 4106</p>
              <p className="text-gray-700 mb-6">
                Especialista em implantes dentários com mais de 25 anos de experiência. 
                Referência em reabilitação oral e transformação de sorrisos.
              </p>
              <div className="flex gap-2 justify-center text-sm text-gray-600">
                <span className="bg-blue-50 px-3 py-1 rounded-full">Implantes</span>
                <span className="bg-blue-50 px-3 py-1 rounded-full">Reabilitação</span>
              </div>
            </div>
          </NuvanceCard>

          {/* Dra. Juliana */}
          <NuvanceCard variant="elevated">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-center">Foto</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Dra. Juliana Maia</h3>
              <p className="text-yellow-500 font-semibold mb-4">Dentista | CRO CE 4121</p>
              <p className="text-gray-700 mb-6">
                Especialista em estética dental e lentes de contato. Transforma sorrisos 
                com técnicas inovadoras e foco em harmonia facial.
              </p>
              <div className="flex gap-2 justify-center text-sm text-gray-600">
                <span className="bg-blue-50 px-3 py-1 rounded-full">Facetas</span>
                <span className="bg-blue-50 px-3 py-1 rounded-full">Estética</span>
              </div>
            </div>
          </NuvanceCard>
        </div>
      </SectionWrapper>

      {/* ===== ESPECIALIDADES SECTION ===== */}
      <SectionWrapper id="especialidades" bgColor="white">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wide">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2 mb-4">
            Especialidades Oferecidas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Soluções completas para sua saúde e estética dental
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Smile,
              title: "Implantes Dentários",
              description: "Reabilitação completa com implantes de última geração"
            },
            {
              icon: Sparkles,
              title: "Facetas Dentárias",
              description: "Transformação estética do sorriso com precisão"
            },
            {
              icon: Award,
              title: "Alinhadores",
              description: "Ortodontia moderna e discreta"
            },
            {
              icon: Heart,
              title: "Lentes de Contato",
              description: "Harmonia e beleza no sorriso"
            }
          ].map((service, idx) => {
            const Icon = service.icon;
            return (
              <NuvanceCard key={idx} variant="default" hover>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </NuvanceCard>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ===== CASOS DE SUCESSO SECTION ===== */}
      <SectionWrapper id="casos" bgColor="light-gray">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wide">
            Transformações
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2 mb-4">
            Casos de Sucesso
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Veja como transformamos sorrisos e mudamos vidas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Antes/Depois */}
              <div className="h-64 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <span className="text-gray-500 text-center">Antes/Depois<br />Caso {idx}</span>
              </div>
              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Transformação {idx}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Paciente transformou seu sorriso com implantes e facetas, recuperando confiança e autoestima.
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== INFRAESTRUTURA SECTION ===== */}
      <SectionWrapper id="infraestrutura" bgColor="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div>
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wide">
              Tecnologia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2 mb-6">
              Infraestrutura de Ponta
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Nossa clínica conta com os mais modernos equipamentos e tecnologias 
              disponíveis no mercado odontológico.
            </p>
            <div className="space-y-4">
              {[
                "Centro cirúrgico completo e esterilizado",
                "Raio-X Panorâmico de última geração",
                "Equipamentos de implantologia avançados",
                "Suporte pré e pós-operatório completo"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mt-1">
                    <span className="text-blue-900 font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem */}
          <div className="relative h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <span className="text-gray-500 text-center">
                Imagem: Clínica<br />(Adicione aqui)
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ===== CONTATO SECTION ===== */}
      <SectionWrapper id="contato" bgColor="light-gray">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wide">
              Entre em Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2 mb-4">
              Agende Sua Consulta
            </h2>
            <p className="text-gray-600 text-lg">
              Estamos prontos para transformar seu sorriso
            </p>
          </div>

          {/* Contato Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <NuvanceCard variant="default">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Telefone</h3>
                <p className="text-gray-600 text-sm">(85) 3025-1414</p>
              </div>
            </NuvanceCard>

            <NuvanceCard variant="default">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="font-bold text-blue-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600 text-sm">(85) 99825-1414</p>
              </div>
            </NuvanceCard>

            <NuvanceCard variant="default">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Localização</h3>
                <p className="text-gray-600 text-sm">Fortaleza, CE</p>
              </div>
            </NuvanceCard>
          </div>

          {/* CTA */}
          <div className="text-center">
            <NuvanceButton variant="primary" size="lg">
              Agendar Consulta Agora
            </NuvanceButton>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
}
