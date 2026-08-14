import { ClientLayout } from "@/components/layout/ClientLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { FAQAccordion } from "@/components/faq/FAQAccordion";

export default function FAQPage() {
  return (
    <ClientLayout>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about joining Dante Lodge #174."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FAQAccordion />
        </div>
      </section>
    </ClientLayout>
  );
}
