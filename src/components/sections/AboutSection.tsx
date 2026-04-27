import SectionWrapper from "@/components/layout/SectionWrapper";
import Reveal from "@/components/Reveal";
import { NuvanceButton } from "@/components/ui/NuvanceButton";
import { aboutContent } from "@/constants/content";

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

export default function AboutSection() {
  return (
    <SectionWrapper id="sobre" tone="light">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <MediaPlaceholder
              className="aspect-[4/5] shadow-elegant"
              label={aboutContent.mediaLabel}
            />

            <div className="absolute -bottom-6 -right-6 hidden md:block bg-gold text-petrol-deep px-8 py-6 rounded-lg max-w-xs shadow-gold-glow">
              <div className="font-display text-4xl font-bold">
                {aboutContent.badge.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold">
                {aboutContent.badge.label}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow mb-5">
            {aboutContent.eyebrow}
          </span>

          <h2 className="font-display text-petrol-deep mb-6 text-4xl md:text-5xl">
            {aboutContent.title.main}{" "}
            <em className="italic font-light text-gold-deep">
              {aboutContent.title.highlight}
            </em>{" "}
            {aboutContent.title.complement}
          </h2>

          <p className="text-petrol-deep/75 mb-6 leading-relaxed text-lg">
            {aboutContent.description}
          </p>

          <ul className="space-y-4 mb-10">
            {aboutContent.features.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-petrol-deep/85 font-medium"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <NuvanceButton variant="outline-petrol" size="md" asChild>
            <a href={aboutContent.cta.href}>
              {aboutContent.cta.label}
            </a>
          </NuvanceButton>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}