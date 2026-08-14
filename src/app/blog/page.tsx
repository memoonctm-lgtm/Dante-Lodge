import { ClientLayout } from "@/components/layout/ClientLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { BlogGrid } from "@/components/blog/BlogGrid";

export default function BlogPage() {
  return (
    <ClientLayout>
      <PageHeader
        title="News & Blog"
        subtitle="Stay updated with lodge events, community announcements, and Masonic education."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <BlogGrid />
        </div>
      </section>
    </ClientLayout>
  );
}
