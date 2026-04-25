import { ReactNode } from "react";

interface NuvanceCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "bordered";
  hover?: boolean;
}

/**
 * NuvanceCard - Componente de card reutilizável
 * 
 * Variantes:
 * - default: Fundo off-white com sombra sutil
 * - elevated: Fundo branco com sombra mais pronunciada
 * - bordered: Borda navy com fundo branco
 */
export default function NuvanceCard({
  children,
  className = "",
  variant = "default",
  hover = true,
}: NuvanceCardProps) {
  const variantStyles = {
    default: "bg-gray-50 shadow-sm",
    elevated: "bg-white shadow-lg",
    bordered: "bg-white border-2 border-blue-900",
  };

  const hoverStyles = hover ? "hover:shadow-xl hover:scale-105 transition-all duration-300" : "";

  return (
    <div
      className={`rounded-lg p-6 ${variantStyles[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
