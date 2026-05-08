import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  tone?: "light" | "warm" | "dark" | "deep";
  texture?: "none" | "lines" | "grid" | "gold-overlay";
  containerClassName?: string;
}

const toneMap = {
  light: "bg-ivory text-petrol-deep",
  warm: "bg-ivory-warm text-petrol-deep",
  dark: "bg-petrol text-ivory",
  deep: "bg-petrol-deep text-ivory",
};

export default function SectionWrapper({
  children,
  className,
  tone = "light",
  texture = "none",
  containerClassName,
  ...props
}: SectionWrapperProps) {
  const textureClass =
    texture === "lines"
      ? "texture-lines"
      : texture === "grid"
      ? "texture-grid"
      : texture === "gold-overlay"
      ? "texture-gold-overlay"
      : "";

  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 md:py-28 lg:py-36",

        toneMap[tone],

        "max-md:border-b max-md:border-black/8",
        "max-md:shadow-[0_1px_0_rgba(0,0,0,0.04)]",

        "md:shadow-[0_-1px_0_rgba(0,0,0,0.03)_inset]",

        tone === "warm" && [
          "max-md:bg-[hsl(38_32%_88%)]", 
          "md:bg-[hsl(38_24%_93%)]"      
        ],

        className
      )}
      {...props}
    >
      {textureClass && (
        <div aria-hidden className={cn("absolute inset-0", textureClass)} />
      )}

      <div className={cn("nuvance-container relative", containerClassName)}>
        {children}
      </div>
    </section>
  );
}