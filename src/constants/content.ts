import { Smile, Sparkles, Award, Heart } from "lucide-react";

export const heroContent = {
  eyebrow: "Odontologia premium",

  title: {
    main: "Implantes e estética com",
    highlight: "precisão e naturalidade.",
  },

  description:
    "25 anos transformando sorrisos em Fortaleza. Tecnologia digital, atendimento humanizado e resultados que duram a vida toda.",

  cta: {
    primary: "Agende sua avaliação",
    secondary: "Conheça os tratamentos",
  },

  whatsappLink:
    "https://wa.me/5585992945489?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20na%20Nuvance.",
};

export const socialProofStats = [
  { value: "+2000", label: "Implantes realizados" },
  { value: "+6500", label: "Pacientes atendidos" },
  { value: "25", label: "Anos de experiência" },
  { value: "100%", label: "Odontologia digital" },
];

export const aboutContent = {
  eyebrow: "Sobre a Nuvance",

  title: {
    main: "Onde a precisão encontra a",
    highlight: "arte",
    complement: "do sorriso.",
  },

  description:
    "Localizada no bairro da Maraponga em Fortaleza, a Nuvance é um centro de excelência em reabilitação oral. Combinamos tecnologia de ponta com um olhar artístico para transformar vidas através da saúde bucal.",

  features: [
    "Experiência clínica de mais de 25 anos",
    "Fluxo 100% digital e tecnologia diagnóstica",
    "Ambiente acolhedor focado no conforto do paciente",
    "Excelência em casos de alta complexidade estética",
  ],

  badge: {
    value: "25+",
    label: "Anos cuidando de sorrisos",
  },

  cta: {
    label: "Conheça os especialistas",
    href: "#profissionais",
  },

  mediaLabel: "Equipe Nuvance Odontologia reunida na clínica",
};

export const videoSectionContent = {
  eyebrow: "A clínica em movimento",
  title: "Um tour pelo nosso espaço",
  video: {
    ariaLabel: "Vídeo institucional em formato vertical com áudio apresentando a clínica Nuvance",
    placeholder: "Clique para assistir com som",
    src: "nKs2bcq_BFY", // ID extraído do link
  },
};

export const doctorsSectionContent = {
  eyebrow: "Nosso time",
  title: "Especialistas dedicados ao seu sorriso",
  description:
    "Profissionais que unem rigor técnico, sensibilidade estética e cuidado humano em cada consulta.",
};

export const doctors = [
  {
    name: "Dr. Thiago Carvalho",
    role: "Implantodontia",
    bio: "Especialista com foco em reabilitação oral e resultados naturais.",
    tags: ["Implantes", "Estética", "Reabilitação"],
    image: "/images/doctors/dr-thiago.webp",
    instagram: "https://www.instagram.com/drthiagocarvalho_/",
  },
  {
    name: "Dra. Juliana Maia",
    role: "Odontologia Estética",
    bio: "Atuação focada em estética dental e reabilitação oral.",
    tags: ["Estética", "Lentes de contato", "Facetas"],
    image: "/images/doctors/dra-juliana.webp",
    instagram: "https://www.instagram.com/drajulianamaia/",
  },
];

export const treatments = [
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

export const casesContent = {
  eyebrow: "Antes & depois",
  title: "Transformações que falam por si",
  description: "Cada caso é único. Veja como devolvemos confiança, função e beleza a centenas de pacientes.",
  testimonial: {
    quote: "Recuperei mais que meu sorriso — recuperei a confiança de sorrir de novo.",
    author: "Paciente Nuvance",
  },
};

export const casesItems = [
  { 
    id: 1, 
    type: 'video', 
    src: '/videos/case-1.mp4', 
    title: "Caso #01", 
    treatment: "Implantes + Facetas" 
  },
  { 
    id: 2, 
    type: 'image', 
    src: '/images/cases/case-1.webp', 
    title: "Caso #02", 
    treatment: "Lentes de Contato" 
  },
  { 
    id: 3, 
    type: 'video', 
    src: '/videos/case-2.mp4', 
    title: "Caso #03", 
    treatment: "Protocolos sobre implantes" 
  },
  { 
    id: 4, 
    type: 'image', 
    src: '/images/cases/case-2.webp', 
    title: "Caso #04", 
    treatment: "Facetas em resina" 
  },
] as const;  

export const structureContent = {
  eyebrow: "Infraestrutura",
  title: "Um espaço pensado para você se sentir em casa.",
  description: "Ambientes amplos, design contemporâneo e equipamentos de última geração. Cada detalhe foi escolhido para transformar a experiência de ir ao dentista em um momento de cuidado e bem-estar.",
  features: [
    "Scanner intraoral e radiografia digital",
    "Salas de atendimento individuais e privativas",
    "Biossegurança em padrão hospitalar rigoroso",
  ],
  gallery: [
    { src: "/images/structure/clinic-2.webp", label: "Consultório 1" },
    { src: "/images/structure/clinic-1.webp", label: "Consultório 2" },
    { src: "/images/structure/clinic-3.webp", label: "Consultório 3" },
    { src: "/images/structure/clinic-4.webp", label: "Corredor" },
    { src: "/images/structure/clinic-5.webp", label: "Gerência" },
    { src: "/images/structure/clinic-6.webp", label: "Recepção" },
    { src: "/images/structure/clinic-7.webp", label: "Fachada Nuvance" },
  ]
};

export const ctaContent = {
  eyebrow: "Atendimento Exclusivo",
  title: "Sua jornada para um sorriso extraordinário.",
  highlight: "sorriso extraordinário.",
  description:
    "Estamos prontos para transformar sua experiência odontológica. Escolha como prefere falar conosco agora mesmo.",
  primary: "Agende pelo WhatsApp",
  secondary: "Ligue agora",
  whatsappLink:
    "https://wa.me/5585992945489?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20na%20Nuvance.",
  phone: "5585992945489",
};

export const locationContent = {
  name: "Nuvance Odontologia",

  eyebrow: "Onde estamos",
  title: "Visite a Nuvance",
  highlight: "em Fortaleza",

  description:
    "Nossa clínica está localizada na Av. Godofredo Maciel, em uma região de fácil acesso, com ambiente exclusivo, seguro e estacionamento privativo para seu conforto.",

  addressLabel: "Endereço",

  address: {
    street: "Av. Godofredo Maciel, 4000 - Loja 02",
    district: "Mondubim",
    city: "Fortaleza",
    state: "CE",
    zip: "60711-502",
    country: "BR",
  },

  phone: "+55 85 99294-5489",

  mapQuery:
    "Nuvance Odontologia Av Godofredo Maciel 4000 Loja 02 Mondubim Fortaleza CE",

  mapEmbed:
    "Av.+Godofredo+Maciel,+4000+Loja+02,+Mondubim,+Fortaleza+CE,+60711-502",
};

export const testimonialsContent = {
  eyebrow: "Relato Real",
  title: "O melhor investimento da vida",
  video: {
    src: "/videos/testimonial.mp4",
    ariaLabel: "Paciente relata que o tratamento na Nuvance foi o melhor investimento de sua vida",
  }
};
