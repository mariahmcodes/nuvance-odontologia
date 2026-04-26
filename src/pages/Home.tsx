import {
  Smile,
  Sparkles,
  Award,
  Heart,
  Phone,
  MapPin,
  MessageCircle,
  Star,
  Quote,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { NuvanceButton } from "@/components/ui/NuvanceButton";
import { NuvanceCard } from "@/components/ui/NuvanceCard";
import Reveal from "@/components/Reveal";
import VideoSection from "@/components/sections/VideoSection";
import CasesCarousel from "@/components/sections/CasesCarousel";
import LocationSection from "@/components/sections/LocationSection";
import goldTexture from "@/assets/gold-geometric-texture.png";

const stats = [
  { value: "+2000", label: "Implantes realizados" },
  { value: "+6500", label: "Pacientes atendidos" },
  { value: "25", label: "Anos de experiência" },
  { value: "100%", label: "Odontologia digital" },
];

const doctors = [
  {
    name: "Dr. Thiago Carvalho",
    role: "Implantodontista — CRO/CE 4106",
    bio: "Referência em implantes e reabilitação oral. 25 anos transformando sorrisos com precisão técnica e visão estética.",
    tags: ["Implantes", "Reabilitação Oral", "Cirurgia"],
  },
  {
    name: "Dra. Juliana Maia",
    role: "Estética Dental — CRO/CE 4121",
    bio: "Especialista em facetas e lentes de contato. Une harmonia facial e naturalidade em cada sorriso.",
    tags: ["Facetas", "Lentes de Contato", "Estética"],
  },
];

const treatments = [
  {
    icon: Smile,
    title: "Implantes Dentários",
    desc: "Reabilitação completa com técnica de carga imediata e precisão digital.",
  },
  {
    icon: Sparkles,
    title: "Facetas & Lentes",
    desc: "Transformação estética minimamente invasiva, com naturalidade absoluta.",
  },
  {
    icon: Award,
    title: "Reabilitação Oral",
    desc: "Devolvemos função, conforto e beleza ao seu sorriso por completo.",
  },
  {
    icon: Heart,
    title: "Odontologia Digital",
    desc: "Planejamento 3D, scanner intraoral e previsibilidade em cada etapa.",
  },
];

/** Bloco placeholder neutro — substituir por <img loading="lazy"> real depois. */
function MediaPlaceholder({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`bg-muted/60 rounded-lg flex items-center justify-center ${className}`}
      role="img"
      aria-label={label ?? "Imagem"}
    >
      {label && (
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60">
          {label}
        </span>
      )}
    </div>
  );
}

const liftHover = { y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const } };

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ===================== HERO ===================== */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden bg-petrol-deep"
      >
        {/* Background — substituir por <img loading="lazy"> ou <video> real */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-petrol-deep via-petrol to-petrol-deep" />
          {/* Textura geométrica dourada — presença visível */}
          <div
            aria-hidden
            className="absolute inset-0 texture-gold-overlay-strong"
            style={{ ["--texture-gold-image" as string]: `url(${goldTexture})` }}
          />
          <div className="absolute inset-0 bg-gradient-overlay-dark" />
        </div>

        <div className="nuvance-container relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow text-gold mb-6">
                Odontologia premium
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-display text-ivory mb-8">
                Implantes e estética com{" "}
                <em className="text-gold not-italic font-light italic">
                  precisão e naturalidade.
                </em>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="text-lg md:text-xl text-ivory/75 max-w-xl mb-10 leading-relaxed">
                25 anos transformando sorrisos em Fortaleza. Tecnologia digital,
                atendimento humano e resultados que duram a vida toda.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-4">
                <NuvanceButton variant="gold" size="lg" className="shadow-gold-glow" asChild>
                  <a href="#contato">
                    Agendar avaliação <ArrowRight size={16} />
                  </a>
                </NuvanceButton>
                <NuvanceButton variant="ghost-light" size="lg" asChild>
                  <a href="#tratamentos">Conheça os tratamentos</a>
                </NuvanceButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== PROVA SOCIAL ===================== */}
      <SectionWrapper tone="warm" className="!py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="text-center">
                <div className="font-display text-5xl md:text-6xl text-petrol mb-2">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-[0.22em] text-petrol/60">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ===================== SOBRE ===================== */}
      <SectionWrapper id="sobre" tone="light">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <MediaPlaceholder
                className="aspect-[4/5] shadow-soft"
                label="Foto da clínica / equipe"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block bg-gold text-petrol-deep px-8 py-6 rounded-lg max-w-xs">
                <div className="font-display text-3xl">25+</div>
                <div className="text-xs uppercase tracking-[0.2em]">
                  Anos cuidando de sorrisos
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow mb-5">Sobre a Nuvance</span>
            <h2 className="font-display text-petrol-deep mb-6">
              Onde a técnica encontra a{" "}
              <em className="italic font-light text-gold-deep">arte</em> do sorriso.
            </h2>
            <p className="text-petrol-deep/75 mb-6 leading-relaxed">
              A Nuvance é uma clínica premium em Fortaleza, especializada em
              implantes, estética dental e reabilitação oral. Cada paciente é
              recebido como único — porque cada sorriso também é.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Time com 25 anos de experiência clínica",
                "Tecnologia digital de ponta em cada etapa",
                "Ambiente acolhedor e atendimento humano",
                "Acompanhamento completo pré e pós-procedimento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-petrol-deep/85">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <NuvanceButton variant="outline-petrol" asChild>
              <a href="#profissionais">Conheça nosso time</a>
            </NuvanceButton>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* ===================== VÍDEO INSTITUCIONAL (DRONE) ===================== */}
      <VideoSection />

      {/* ===================== PROFISSIONAIS ===================== */}
      <SectionWrapper id="profissionais" tone="dark" texture="gold-overlay">
        <div className="text-center mb-16">
          <Reveal>
            <span className="eyebrow mb-5">Nosso time</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-ivory mb-5">
              Especialistas dedicados ao seu sorriso
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-2xl mx-auto text-ivory/65">
              Profissionais que unem rigor técnico, sensibilidade estética e
              cuidado humano em cada consulta.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {doctors.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.1}>
              <motion.div whileHover={liftHover} className="h-full">
                <NuvanceCard variant="ghost" hover={false} className="h-full p-0 overflow-hidden">
                  <MediaPlaceholder
                    className="aspect-[4/3] !rounded-none bg-petrol-soft/40"
                    label={`Foto ${d.name}`}
                  />
                  <div className="p-8">
                    <h3 className="font-display text-2xl text-ivory mb-1">
                      {d.name}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold mb-5">
                      {d.role}
                    </p>
                    <p className="text-ivory/70 mb-6 leading-relaxed">{d.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {d.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-[0.18em] px-3 py-1 rounded-full border border-gold/40 text-gold/90"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </NuvanceCard>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ===================== TRATAMENTOS ===================== */}
      <SectionWrapper id="tratamentos" tone="light">
        <div className="text-center mb-16">
          <Reveal>
            <span className="eyebrow mb-5">Tratamentos</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-petrol-deep">
              Soluções pensadas pra cada etapa do seu sorriso
            </h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.title} delay={i * 0.06}>
                <motion.div whileHover={liftHover} className="h-full">
                  <NuvanceCard variant="light" hover={false} className="h-full transition-colors duration-400 hover:border-gold/50">
                    <div className="h-12 w-12 rounded-md bg-gold/15 flex items-center justify-center mb-6">
                      <Icon className="text-gold-deep" size={22} />
                    </div>
                    <h3 className="font-display text-2xl text-petrol-deep mb-3">
                      {t.title}
                    </h3>
                    <p className="text-sm text-petrol-deep/70 leading-relaxed">
                      {t.desc}
                    </p>
                  </NuvanceCard>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ===================== CASOS CLÍNICOS (CARROSSEL) ===================== */}
      <SectionWrapper id="casos" tone="deep" texture="gold-overlay">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <Reveal>
              <span className="eyebrow mb-5">Antes & depois</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-ivory">
                Transformações que falam por si
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-md text-ivory/65">
              Cada caso é único. Veja como devolvemos confiança, função e beleza
              a centenas de pacientes.
            </p>
          </Reveal>
        </div>

        <CasesCarousel />

        <Reveal delay={0.2}>
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <Quote size={32} className="text-gold mx-auto mb-6 opacity-60" />
            <p className="font-display text-2xl md:text-3xl text-ivory leading-snug italic mb-6">
              "Recuperei mais que meu sorriso — recuperei a confiança de sorrir
              de novo."
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">
              Paciente Nuvance
            </p>
          </div>
        </Reveal>
      </SectionWrapper>

      {/* ===================== ESTRUTURA ===================== */}
      <SectionWrapper id="estrutura" tone="warm">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal delay={0.08}>
            <span className="eyebrow mb-5">A clínica</span>
            <h2 className="font-display text-petrol-deep mb-6">
              Um espaço pensado pra você se sentir em casa.
            </h2>
            <p className="text-petrol-deep/75 mb-6 leading-relaxed">
              Ambientes amplos, design contemporâneo e equipamentos de última
              geração. Cada detalhe foi escolhido pra transformar a experiência
              de ir ao dentista.
            </p>
            <ul className="space-y-3">
              {[
                "Centro cirúrgico próprio e esterilizado",
                "Scanner intraoral e radiografia digital",
                "Salas de atendimento individuais",
                "Biossegurança em padrão hospitalar",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-petrol-deep/85">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <MediaPlaceholder
                className="aspect-[3/4]"
                label="Estrutura 1"
              />
              <MediaPlaceholder
                className="aspect-[3/4] mt-10"
                label="Estrutura 2"
              />
            </div>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* ===================== CTA / CONTATO ===================== */}
      <SectionWrapper id="contato" tone="dark" texture="gold-overlay">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <Reveal>
            <span className="eyebrow mb-5">Vamos começar</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-ivory mb-6">
              Agende sua avaliação na Nuvance
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-ivory/70 max-w-xl mx-auto">
              Estamos a uma mensagem de distância. Receba atendimento
              personalizado e descubra o melhor caminho pro seu sorriso.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Phone, label: "Telefone", value: "(85) 3025-1414" },
            { icon: MessageCircle, label: "WhatsApp", value: "(85) 99825-1414" },
            { icon: MapPin, label: "Endereço", value: "Fortaleza — CE" },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.label} delay={i * 0.08}>
                <NuvanceCard variant="ghost" hover={false} className="text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-gold/15 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">
                    {c.label}
                  </p>
                  <p className="font-display text-xl text-ivory">{c.value}</p>
                </NuvanceCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="text-center">
            <NuvanceButton variant="gold" size="lg" className="shadow-gold-glow" asChild>
              <a
                href="https://wa.me/5585998251414"
                target="_blank"
                rel="noreferrer"
              >
                Agendar pelo WhatsApp <ArrowRight size={16} />
              </a>
            </NuvanceButton>
          </div>
        </Reveal>
      </SectionWrapper>

      {/* ===================== LOCALIZAÇÃO (SEO LOCAL) ===================== */}
      <LocationSection />

      <Footer />
    </div>
  );
}