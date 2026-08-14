"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { useSite } from "@/context/SiteProvider";

export function ContactInfo() {
  const { content } = useSite();
  const { contact } = content;

  const items = [
    {
      icon: Phone,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: contact.location,
    },
    {
      icon: FacebookIcon,
      label: "Facebook",
      value: "Follow us on Facebook",
      href: contact.facebook,
    },
  ];

  return (
    <AnimatedSection>
      <h2 className="mb-8 font-serif text-2xl font-bold text-white">
        Get In Touch
      </h2>
      <div className="space-y-6">
        {items.map((item) => {
          const Icon = item.icon;
          return (
          <div key={item.label} className="flex items-start gap-4">
            <div className="rounded-sm bg-[var(--color-primary)]/10 p-3">
              <Icon className="h-5 w-5 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.label === "Facebook" ? "_blank" : undefined}
                  rel={
                    item.label === "Facebook"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-1 block text-white transition-colors hover:text-[var(--color-primary)]"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-1 text-white">{item.value}</p>
              )}
            </div>
          </div>
        );
        })}

        <div className="mt-8 rounded-sm border border-white/10 bg-[var(--color-secondary)] p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-sm bg-[var(--color-accent)]/10 p-3">
              <Clock className="h-5 w-5 text-[var(--color-accent)]" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                Meeting Schedule
              </p>
              <p className="mt-1 text-white">
                1st & 3rd Thursday of each month
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                Stated meetings at 7:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
