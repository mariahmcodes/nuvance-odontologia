import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/Reveal";
import { structureContent } from "@/constants/content";

function MediaPlaceholder({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`bg-muted/60 rounded-lg flex items-center justify-center overflow-hidden ${className}`}
      role="img"
      aria-label={label ?? "Imagem"}
    >
      {label && (
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 text-center px-4">
          {label}
        </span>
      )}
    </div>
  );
}

export default function StructureSection() {
  return (
    <SectionWrapper id="estrutura" tone="warm">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <Reveal delay={0.08}>
          <span className="eyebrow mb-5">{structureContent.eyebrow}</span>

          <h2 className="font-display text-petrol-deep mb-6 text-4xl">
            {structureContent.title}
          </h2>

          <p className="text-petrol-deep/75 mb-8 leading-relaxed text-lg">
            {structureContent.description}
          </p>

          <ul className="space-y-4 mb-10">
            {structureContent.features.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-petrol-deep/85 font-medium"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <MediaPlaceholder
              className="aspect-[3/4] shadow-elegant"
              label="Estrutura Interna"
            />
            <MediaPlaceholder
              className="aspect-[3/4] mt-12 shadow-elegant"
              label="Tecnologia"
            />
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}