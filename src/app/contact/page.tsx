import { ClientLayout } from "@/components/layout/ClientLayout";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <ClientLayout>
      <PageHeader
        title="Contact Us"
        subtitle="Reach out to learn more about Freemasonry and Dante Lodge #174."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="mb-8 font-serif text-2xl font-bold text-white">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  );
}
