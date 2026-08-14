import { ClientLayout } from "@/components/layout/ClientLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { AboutContent } from "@/components/about/AboutContent";
import { OfficersGrid } from "@/components/officers/OfficersGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <ClientLayout>
      <PageHeader
        title="About Us"
        subtitle="Discover the history, values, and mission of Dante Lodge #174."
      />
      <AboutContent />
      <section className="bg-[var(--color-background)] py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="Our Officers"
            subtitle="Meet the dedicated brothers who lead and serve Dante Lodge #174."
          />
          <OfficersGrid showPast={false} />
        </div>
      </section>
    </ClientLayout>
  );
}
