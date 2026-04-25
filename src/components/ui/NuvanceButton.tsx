import { ReactNode } from "react";

interface NuvanceButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

/**
 * NuvanceButton - Botão reutilizável com variantes Navy/Gold
 * 
 * Variantes:
 * - primary: Navy background com texto branco (CTA principal)
 * - secondary: Gold background com texto navy (CTA secundária)
 * - outline: Borda navy com fundo transparente
 */
export default function NuvanceButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
}: NuvanceButtonProps) {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-blue-900 text-white hover:bg-blue-800 active:bg-blue-950 shadow-md hover:shadow-lg",
    secondary:
      "bg-yellow-400 text-blue-900 hover:bg-yellow-300 active:bg-yellow-500 shadow-md hover:shadow-lg",
    outline:
      "border-2 border-blue-900 text-blue-900 hover:bg-blue-50 active:bg-blue-100",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
