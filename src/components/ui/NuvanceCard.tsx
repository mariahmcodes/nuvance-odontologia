import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * NuvanceCard — Card elegante com variantes pra fundos light/dark.
 */
interface NuvanceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "light" | "dark" | "gold-border" | "ghost";
  hover?: boolean;
}

const variantMap: Record<NonNullable<NuvanceCardProps["variant"]>, string> = {
  light: "bg-card text-card-foreground border border-border/60 shadow-soft",
  dark: "bg-petrol text-ivory border border-petrol-soft/40 shadow-card-dark",
  "gold-border":
    "bg-card text-card-foreground border border-gold/40 shadow-soft",
  ghost:
    "bg-transparent text-ivory border border-ivory/15 backdrop-blur-sm",
};

const NuvanceCard = React.forwardRef<HTMLDivElement, NuvanceCardProps>(
  ({ className, variant = "light", hover = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg p-8 transition-colors duration-400 ease-elegant",
          variantMap[variant],
          hover && "hover:border-gold/50",
          className
        )}
        {...props}
      />
    );
  }
);
NuvanceCard.displayName = "NuvanceCard";

export { NuvanceCard };
export default NuvanceCard;