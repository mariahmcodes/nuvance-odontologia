import * as React from "react";
import { cn } from "@/lib/utils";
import goldTexture from "@/assets/gold-geometric-texture.png";

/**
 * SectionWrapper — Envelope de seção com tons alternados.
 * tone: light | warm | dark | deep
 * texture: none | lines | grid | gold-overlay (marca d'água geométrica dourada)
 */
interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  tone?: "light" | "warm" | "dark" | "deep";
  texture?: "none" | "lines" | "grid" | "gold-overlay";
  containerClassName?: string;
}

const toneMap: Record<NonNullable<SectionWrapperProps["tone"]>, string> = {
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

  const textureStyle =
    texture === "gold-overlay"
      ? ({ ["--texture-gold-image" as string]: `url(${goldTexture})` } as React.CSSProperties)
      : undefined;

  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 md:py-28 lg:py-36",
        toneMap[tone],
        className
      )}
      {...props}
    >
      {textureClass && (
        <div
          aria-hidden
          className={cn("absolute inset-0", textureClass)}
          style={textureStyle}
        />
      )}
      <div className={cn("nuvance-container relative", containerClassName)}>
        {children}
      </div>
    </section>
  );
}