import { ClientLayout } from "@/components/layout/ClientLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { OfficersGrid } from "@/components/officers/OfficersGrid";

export default function OfficersPage() {
  return (
    <ClientLayout>
      <PageHeader
        title="Lodge Officers"
        subtitle="The brothers who lead, serve, and guide Dante Lodge #174."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <OfficersGrid />
        </div>
      </section>
    </ClientLayout>
  );
}
