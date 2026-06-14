type Props = {
  kicker?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
  tone = "light",
  className = "",
}: Props) {
  const text = tone === "dark" ? "text-cream" : "text-charcoal";
  const sub = tone === "dark" ? "text-cream/60" : "text-charcoal/60";
  const accent = tone === "dark" ? "text-gold" : "text-forest";
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${a} ${className}`}>
      {kicker && (
        <div className={`reveal kicker ${accent} mb-5 inline-flex items-center gap-3`}>
          <span className="h-px w-8 bg-current opacity-60" />
          {kicker}
        </div>
      )}
      <h2
        className={`reveal font-serif ${text} text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`reveal mt-6 text-base md:text-lg ${sub} leading-relaxed text-pretty`}>
          {intro}
        </p>
      )}
    </div>
  );
}
