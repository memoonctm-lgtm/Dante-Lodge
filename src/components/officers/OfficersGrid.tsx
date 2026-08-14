"use client";

import { User } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useSite } from "@/context/SiteProvider";
import { Officer } from "@/types/site";

function OfficerCard({ officer }: { officer: Officer }) {
  return (
    <div className="group overflow-hidden rounded-sm border border-white/10 bg-[var(--color-secondary)] transition-all duration-300 hover:border-[var(--color-primary)]/40 hover:shadow-lg hover:shadow-black/20">
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-background)]">
        {officer.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={officer.photoUrl}
            alt={officer.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <User className="h-20 w-20 text-[var(--color-primary)]/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-sm bg-[var(--color-accent)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          {officer.termYears}
        </span>
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
          {officer.title}
        </p>
        <h3 className="mt-2 font-serif text-xl font-bold text-white">
          {officer.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {officer.bio}
        </p>
      </div>
    </div>
  );
}

interface OfficersGridProps {
  showPast?: boolean;
}

export function OfficersGrid({ showPast = true }: OfficersGridProps) {
  const { content } = useSite();
  const currentOfficers = content.officers.filter((o) => !o.isPast);
  const pastOfficers = content.officers.filter((o) => o.isPast);

  return (
    <div className="space-y-16">
      <div>
        <h3 className="mb-8 font-serif text-2xl font-bold text-white">
          Current Officers
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentOfficers.map((officer, index) => (
            <AnimatedSection key={officer.id} delay={index * 0.1}>
              <OfficerCard officer={officer} />
            </AnimatedSection>
          ))}
        </div>
      </div>

      {showPast && pastOfficers.length > 0 && (
        <div>
          <h3 className="mb-8 font-serif text-2xl font-bold text-white">
            Past Officers
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pastOfficers.map((officer, index) => (
              <AnimatedSection key={officer.id} delay={index * 0.1}>
                <OfficerCard officer={officer} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
