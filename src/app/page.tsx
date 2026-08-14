import { ClientLayout } from "@/components/layout/ClientLayout";
import { Hero } from "@/components/home/Hero";
import { PillarsSection } from "@/components/home/PillarsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { EventsSection } from "@/components/home/EventsSection";
import { MissionValuesSection } from "@/components/home/MissionValuesSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { BlogSection } from "@/components/home/BlogSection";
import { CommitmentSection } from "@/components/home/CommitmentSection";
import { CTASection } from "@/components/home/CTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function HomePage() {
  return (
    <ClientLayout>
      <Hero />
      <PillarsSection />
      <section className="bg-[var(--color-secondary)] py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            accent
            title="Built for Brotherhood"
            subtitle="Designed for men aged 18–45 seeking integrity, personal growth, and meaningful community impact."
          />
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
                At Dante Lodge #174, we welcome men who aspire to be better
                husbands, fathers, professionals, and citizens. Our lodge
                provides a supportive environment where character is forged
                through fellowship, reflection, and service.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <TestimonialsSection />
      <EventsSection />
      <MissionValuesSection />
      <BenefitsSection />
      <StatsSection />
      <BlogSection />
      <CommitmentSection />
      <CTASection />
    </ClientLayout>
  );
}
