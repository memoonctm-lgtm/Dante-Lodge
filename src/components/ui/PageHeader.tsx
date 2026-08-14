interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-secondary)] pb-16 pt-32">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, var(--color-primary) 0%, transparent 60%)`,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
          Dante Lodge #174
        </span>
        <h1 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-muted)]">
            {subtitle}
          </p>
        )}
        <div className="mt-6 h-1 w-16 bg-[var(--color-primary)]" />
      </div>
    </section>
  );
}
