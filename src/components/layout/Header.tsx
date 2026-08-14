"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/officers", label: "Officers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--color-secondary)]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" aria-label="Dante Lodge #174 Home">
          <Logo size="sm" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors",
                pathname === link.href
                  ? "text-[var(--color-primary)] border-b-2 border-[var(--color-accent)]"
                  : "text-[var(--color-text-muted)] hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link href="/contact">
            <Button variant="accent" size="sm">
              Become a Mason
            </Button>
          </Link>
          <Link
            href="/admin/login"
            className="rounded-sm p-2 text-[var(--color-text-muted)] transition-colors hover:bg-white/5 hover:text-white"
            aria-label="Admin Panel"
          >
            <Settings className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-sm p-2 text-white xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[var(--color-secondary)] xl:hidden"
          >
            <nav className="flex flex-col px-4 py-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "border-b border-white/5 px-2 py-3 text-sm font-medium uppercase tracking-wider",
                    pathname === link.href
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text-muted)]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <Link href="/contact">
                  <Button variant="accent" size="sm" className="w-full">
                    Become a Mason
                  </Button>
                </Link>
                <Link
                  href="/admin/login"
                  className="flex items-center justify-center gap-2 py-2 text-sm text-[var(--color-text-muted)]"
                >
                  <Settings className="h-4 w-4" />
                  Admin Panel
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
