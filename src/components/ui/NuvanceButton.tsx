import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * NuvanceButton — Botão da identidade Nuvance
 * Variantes: petrol (CTA principal), gold (CTA destaque), outline-gold, ghost-light (sobre fundos dark).
 */
const nuvanceButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-sans font-medium tracking-wide transition-all duration-400 ease-elegant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        petrol:
          "bg-petrol text-ivory hover:bg-petrol-deep shadow-soft hover:shadow-elegant",
        gold:
          "bg-gold text-petrol-deep hover:bg-gold-soft shadow-soft hover:shadow-gold-glow",
        "outline-gold":
          "border border-gold/60 text-gold hover:border-gold hover:bg-gold/10",
        "outline-petrol":
          "border border-petrol/40 text-petrol hover:border-petrol hover:bg-petrol/5",
        "ghost-light":
          "text-ivory hover:bg-ivory/10",
      },
      size: {
        sm: "h-9 px-4 text-xs uppercase tracking-[0.18em]",
        md: "h-11 px-6 text-sm uppercase tracking-[0.18em]",
        lg: "h-14 px-10 text-sm uppercase tracking-[0.22em]",
      },
    },
    defaultVariants: {
      variant: "petrol",
      size: "md",
    },
  }
);

export interface NuvanceButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof nuvanceButtonVariants> {
  asChild?: boolean;
}

const NuvanceButton = React.forwardRef<HTMLButtonElement, NuvanceButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(nuvanceButtonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
NuvanceButton.displayName = "NuvanceButton";

export { NuvanceButton, nuvanceButtonVariants };
export default NuvanceButton;