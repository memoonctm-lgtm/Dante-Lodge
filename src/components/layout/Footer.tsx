"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/Logo";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { useSite } from "@/context/SiteProvider";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/officers", label: "Officers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const { content } = useSite();
  const { contact } = content;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[var(--color-secondary)]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo size="md" />
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
              A brotherhood of men dedicated to integrity, fellowship, and
              community service in Louisiana.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-bold text-white">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/admin/login"
                  className="text-sm text-[var(--color-accent)] transition-colors hover:brightness-110"
                >
                  Admin Panel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-bold text-white">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                {contact.location}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-bold text-white">
              Connect
            </h3>
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-white/10 px-4 py-2 text-sm text-[var(--color-text-muted)] transition-all hover:border-[var(--color-primary)] hover:text-white"
            >
              <FacebookIcon className="h-4 w-4" />
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-[var(--color-text-muted)]">
            &copy; {year} Dante Lodge #174. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]/60">
            Brotherly Love &bull; Relief &bull; Truth
          </p>
        </div>
      </div>
    </footer>
  );
}
