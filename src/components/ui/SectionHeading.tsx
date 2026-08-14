interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  accent?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  accent = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {accent && (
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
          Dante Lodge #174
        </span>
      )}
      <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-16 bg-[var(--color-primary)] ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
