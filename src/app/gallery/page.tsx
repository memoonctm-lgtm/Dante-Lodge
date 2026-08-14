import { ClientLayout } from "@/components/layout/ClientLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <ClientLayout>
      <PageHeader
        title="Gallery"
        subtitle="Moments from our lodge events, community service, and rich history."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </ClientLayout>
  );
}
