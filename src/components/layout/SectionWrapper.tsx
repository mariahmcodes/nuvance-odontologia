import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  bgColor?: "white" | "light-gray" | "navy" | "gold";
  id?: string;
}

/**
 * SectionWrapper - Componente reutilizável para envolver seções da landing page
 * Fornece padding consistente, max-width e opções de cor de fundo
 * 
 * Uso:
 * <SectionWrapper bgColor="white">
 *   <h2>Título da Seção</h2>
 *   <p>Conteúdo...</p>
 * </SectionWrapper>
 */
export default function SectionWrapper({
  children,
  className = "",
  bgColor = "white",
  id,
}: SectionWrapperProps) {
  const bgColorMap = {
    white: "bg-white",
    "light-gray": "bg-gray-50",
    navy: "bg-blue-900",
    gold: "bg-yellow-50",
  };

  return (
    <section
      id={id}
      className={`w-full py-16 sm:py-20 md:py-28 ${bgColorMap[bgColor]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
