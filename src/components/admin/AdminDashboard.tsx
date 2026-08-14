"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Type,
  Users,
  Image,
  HelpCircle,
  Newspaper,
  Palette,
  RotateCcw,
  Save,
  Plus,
  Trash2,
  ArrowLeft,
  Home,
  LogOut,
} from "lucide-react";
import { useSite } from "@/context/SiteProvider";
import { Button } from "@/components/ui/Button";
import {
  Officer,
  GalleryItem,
  FAQItem,
  BlogPost,
  SiteContent,
} from "@/types/site";
import { cn } from "@/lib/utils";

type Tab = "text" | "officers" | "gallery" | "faq" | "blog" | "theme";

const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "text", label: "Site Text", icon: Type },
  { id: "officers", label: "Officers", icon: Users },
  { id: "gallery", label: "Gallery", icon: Image },
  { id: "faq", label: "FAQ", icon: HelpCircle },
  { id: "blog", label: "Blog", icon: Newspaper },
  { id: "theme", label: "Theme", icon: Palette },
];

function InputField({
  label,
  value,
  onChange,
  multiline = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
}) {
  const classes =
    "w-full rounded-sm border border-white/10 bg-[var(--color-background)] px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]";
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
        {label}
      </label>
      {multiline ? (
        <textarea
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={classes}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={classes}
        />
      )}
    </div>
  );
}

export function AdminDashboard() {
  const { content, updateContent, resetContent } = useSite();
  const [activeTab, setActiveTab] = useState<Tab>("text");
  const [saved, setSaved] = useState(false);

  const showSaved = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const updateHero = (field: keyof SiteContent["hero"], value: string) => {
    updateContent({ hero: { ...content.hero, [field]: value } });
    showSaved();
  };

  const updateAbout = (field: keyof SiteContent["about"], value: string) => {
    updateContent({ about: { ...content.about, [field]: value } });
    showSaved();
  };

  const updateContact = (
    field: keyof SiteContent["contact"],
    value: string
  ) => {
    updateContent({ contact: { ...content.contact, [field]: value } });
    showSaved();
  };

  const updateTheme = (
    field: keyof SiteContent["theme"],
    value: string
  ) => {
    updateContent({ theme: { ...content.theme, [field]: value } });
    showSaved();
  };

  const updateOfficer = (id: string, updates: Partial<Officer>) => {
    updateContent({
      officers: content.officers.map((o) =>
        o.id === id ? { ...o, ...updates } : o
      ),
    });
    showSaved();
  };

  const addOfficer = () => {
    const newOfficer: Officer = {
      id: Date.now().toString(),
      name: "New Officer",
      title: "Officer Title",
      termYears: "2025–2026",
      bio: "Officer biography...",
      photoUrl: "",
      isPast: false,
    };
    updateContent({ officers: [...content.officers, newOfficer] });
    showSaved();
  };

  const removeOfficer = (id: string) => {
    updateContent({
      officers: content.officers.filter((o) => o.id !== id),
    });
    showSaved();
  };

  const updateGalleryItem = (id: string, updates: Partial<GalleryItem>) => {
    updateContent({
      gallery: content.gallery.map((g) =>
        g.id === id ? { ...g, ...updates } : g
      ),
    });
    showSaved();
  };

  const addGalleryItem = () => {
    const item: GalleryItem = {
      id: Date.now().toString(),
      title: "New Photo",
      category: "events",
      imageUrl: "https://images.unsplash.com/photo-1519167758481-83f29daae6a5?w=800&q=80",
      description: "Photo description...",
    };
    updateContent({ gallery: [...content.gallery, item] });
    showSaved();
  };

  const removeGalleryItem = (id: string) => {
    updateContent({
      gallery: content.gallery.filter((g) => g.id !== id),
    });
    showSaved();
  };

  const updateFAQ = (id: string, updates: Partial<FAQItem>) => {
    updateContent({
      faq: content.faq.map((f) => (f.id === id ? { ...f, ...updates } : f)),
    });
    showSaved();
  };

  const addFAQ = () => {
    const item: FAQItem = {
      id: Date.now().toString(),
      question: "New Question?",
      answer: "Answer here...",
    };
    updateContent({ faq: [...content.faq, item] });
    showSaved();
  };

  const removeFAQ = (id: string) => {
    updateContent({ faq: content.faq.filter((f) => f.id !== id) });
    showSaved();
  };

  const updateBlog = (id: string, updates: Partial<BlogPost>) => {
    updateContent({
      blog: content.blog.map((b) => (b.id === id ? { ...b, ...updates } : b)),
    });
    showSaved();
  };

  const addBlog = () => {
    const post: BlogPost = {
      id: Date.now().toString(),
      title: "New Article",
      excerpt: "Brief excerpt...",
      content: "Full article content...",
      date: new Date().toISOString().split("T")[0],
      category: "News",
      imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    };
    updateContent({ blog: [...content.blog, post] });
    showSaved();
  };

  const removeBlog = (id: string) => {
    updateContent({ blog: content.blog.filter((b) => b.id !== id) });
    showSaved();
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Admin Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--color-secondary)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Site
            </Link>
            <h1 className="font-serif text-xl font-bold text-white">
              Admin Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {saved && (
              <span className="flex items-center gap-1 text-sm text-[var(--color-primary)]">
                <Save className="h-4 w-4" />
                Saved
              </span>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (
                  confirm(
                    "Reset all content to defaults? This cannot be undone."
                  )
                ) {
                  resetContent();
                }
              }}
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
            <Link href="/">
              <Button variant="primary" size="sm">
                <Home className="h-4 w-4" />
                View Site
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8 lg:px-8">
        {/* Sidebar Tabs */}
        <nav className="hidden w-56 shrink-0 lg:block">
          <ul className="space-y-1">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-sm px-4 py-3 text-sm font-medium transition-all",
                    activeTab === tab.id
                      ? "bg-[var(--color-primary)]/20 text-[var(--color-primary)] border-l-2 border-[var(--color-accent)]"
                      : "text-[var(--color-text-muted)] hover:bg-white/5 hover:text-white"
                  )}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Tab Select */}
        <div className="mb-6 w-full lg:hidden">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value as Tab)}
            className="w-full rounded-sm border border-white/10 bg-[var(--color-secondary)] px-4 py-3 text-white"
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>

        {/* Content Panel */}
        <div className="flex-1 space-y-6">
          {activeTab === "text" && (
            <div className="space-y-8">
              <section className="rounded-sm border border-white/10 bg-[var(--color-secondary)] p-6">
                <h2 className="mb-4 font-serif text-lg font-bold text-white">
                  Hero Section
                </h2>
                <div className="space-y-4">
                  <InputField
                    label="Headline"
                    value={content.hero.headline}
                    onChange={(v) => updateHero("headline", v)}
                  />
                  <InputField
                    label="Sub-headline"
                    value={content.hero.subheadline}
                    onChange={(v) => updateHero("subheadline", v)}
                    multiline
                  />
                  <InputField
                    label="Primary CTA"
                    value={content.hero.ctaPrimary}
                    onChange={(v) => updateHero("ctaPrimary", v)}
                  />
                  <InputField
                    label="Secondary CTA"
                    value={content.hero.ctaSecondary}
                    onChange={(v) => updateHero("ctaSecondary", v)}
                  />
                </div>
              </section>

              <section className="rounded-sm border border-white/10 bg-[var(--color-secondary)] p-6">
                <h2 className="mb-4 font-serif text-lg font-bold text-white">
                  About Us
                </h2>
                <div className="space-y-4">
                  <InputField
                    label="Section Title"
                    value={content.about.title}
                    onChange={(v) => updateAbout("title", v)}
                  />
                  <InputField
                    label="Content"
                    value={content.about.content}
                    onChange={(v) => updateAbout("content", v)}
                    multiline
                  />
                </div>
              </section>

              <section className="rounded-sm border border-white/10 bg-[var(--color-secondary)] p-6">
                <h2 className="mb-4 font-serif text-lg font-bold text-white">
                  Contact Info
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <InputField
                    label="Phone"
                    value={content.contact.phone}
                    onChange={(v) => updateContact("phone", v)}
                  />
                  <InputField
                    label="Email"
                    value={content.contact.email}
                    onChange={(v) => updateContact("email", v)}
                  />
                  <InputField
                    label="Location"
                    value={content.contact.location}
                    onChange={(v) => updateContact("location", v)}
                  />
                  <InputField
                    label="Facebook URL"
                    value={content.contact.facebook}
                    onChange={(v) => updateContact("facebook", v)}
                  />
                </div>
              </section>
            </div>
          )}

          {activeTab === "officers" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-lg font-bold text-white">
                  Manage Officers
                </h2>
                <Button variant="primary" size="sm" onClick={addOfficer}>
                  <Plus className="h-4 w-4" />
                  Add Officer
                </Button>
              </div>
              {content.officers.map((officer) => (
                <div
                  key={officer.id}
                  className="rounded-sm border border-white/10 bg-[var(--color-secondary)] p-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                      <input
                        type="checkbox"
                        checked={officer.isPast}
                        onChange={(e) =>
                          updateOfficer(officer.id, {
                            isPast: e.target.checked,
                          })
                        }
                        className="rounded"
                      />
                      Past Officer
                    </label>
                    <button
                      onClick={() => removeOfficer(officer.id)}
                      className="text-[var(--color-accent)] hover:brightness-110"
                      aria-label="Remove officer"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <InputField
                      label="Name"
                      value={officer.name}
                      onChange={(v) => updateOfficer(officer.id, { name: v })}
                    />
                    <InputField
                      label="Title"
                      value={officer.title}
                      onChange={(v) =>
                        updateOfficer(officer.id, { title: v })
                      }
                    />
                    <InputField
                      label="Term Years"
                      value={officer.termYears}
                      onChange={(v) =>
                        updateOfficer(officer.id, { termYears: v })
                      }
                    />
                    <InputField
                      label="Photo URL"
                      value={officer.photoUrl}
                      onChange={(v) =>
                        updateOfficer(officer.id, { photoUrl: v })
                      }
                    />
                    <div className="sm:col-span-2">
                      <InputField
                        label="Bio"
                        value={officer.bio}
                        onChange={(v) => updateOfficer(officer.id, { bio: v })}
                        multiline
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-lg font-bold text-white">
                  Manage Gallery
                </h2>
                <Button variant="primary" size="sm" onClick={addGalleryItem}>
                  <Plus className="h-4 w-4" />
                  Add Photo
                </Button>
              </div>
              {content.gallery.map((item) => (
                <div
                  key={item.id}
                  className="rounded-sm border border-white/10 bg-[var(--color-secondary)] p-6"
                >
                  <div className="mb-4 flex justify-end">
                    <button
                      onClick={() => removeGalleryItem(item.id)}
                      className="text-[var(--color-accent)] hover:brightness-110"
                      aria-label="Remove gallery item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <InputField
                      label="Title"
                      value={item.title}
                      onChange={(v) =>
                        updateGalleryItem(item.id, { title: v })
                      }
                    />
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                        Category
                      </label>
                      <select
                        value={item.category}
                        onChange={(e) =>
                          updateGalleryItem(item.id, {
                            category: e.target.value as GalleryItem["category"],
                          })
                        }
                        className="w-full rounded-sm border border-white/10 bg-[var(--color-background)] px-3 py-2 text-sm text-white"
                      >
                        <option value="events">Events</option>
                        <option value="service">Community Service</option>
                        <option value="history">History</option>
                      </select>
                    </div>
                    <InputField
                      label="Image URL"
                      value={item.imageUrl}
                      onChange={(v) =>
                        updateGalleryItem(item.id, { imageUrl: v })
                      }
                    />
                    <InputField
                      label="Description"
                      value={item.description}
                      onChange={(v) =>
                        updateGalleryItem(item.id, { description: v })
                      }
                    />
                  </div>
                  {item.imageUrl && (
                    <div className="mt-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="h-32 w-auto rounded-sm object-cover"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "faq" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-lg font-bold text-white">
                  Manage FAQ
                </h2>
                <Button variant="primary" size="sm" onClick={addFAQ}>
                  <Plus className="h-4 w-4" />
                  Add Question
                </Button>
              </div>
              {content.faq.map((item) => (
                <div
                  key={item.id}
                  className="rounded-sm border border-white/10 bg-[var(--color-secondary)] p-6"
                >
                  <div className="mb-4 flex justify-end">
                    <button
                      onClick={() => removeFAQ(item.id)}
                      className="text-[var(--color-accent)] hover:brightness-110"
                      aria-label="Remove FAQ item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <InputField
                      label="Question"
                      value={item.question}
                      onChange={(v) => updateFAQ(item.id, { question: v })}
                    />
                    <InputField
                      label="Answer"
                      value={item.answer}
                      onChange={(v) => updateFAQ(item.id, { answer: v })}
                      multiline
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "blog" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-lg font-bold text-white">
                  Manage Blog
                </h2>
                <Button variant="primary" size="sm" onClick={addBlog}>
                  <Plus className="h-4 w-4" />
                  Add Article
                </Button>
              </div>
              {content.blog.map((post) => (
                <div
                  key={post.id}
                  className="rounded-sm border border-white/10 bg-[var(--color-secondary)] p-6"
                >
                  <div className="mb-4 flex justify-end">
                    <button
                      onClick={() => removeBlog(post.id)}
                      className="text-[var(--color-accent)] hover:brightness-110"
                      aria-label="Remove blog post"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <InputField
                      label="Title"
                      value={post.title}
                      onChange={(v) => updateBlog(post.id, { title: v })}
                    />
                    <InputField
                      label="Category"
                      value={post.category}
                      onChange={(v) => updateBlog(post.id, { category: v })}
                    />
                    <InputField
                      label="Date"
                      value={post.date}
                      onChange={(v) => updateBlog(post.id, { date: v })}
                    />
                    <InputField
                      label="Image URL"
                      value={post.imageUrl}
                      onChange={(v) => updateBlog(post.id, { imageUrl: v })}
                    />
                    <div className="sm:col-span-2">
                      <InputField
                        label="Excerpt"
                        value={post.excerpt}
                        onChange={(v) => updateBlog(post.id, { excerpt: v })}
                        multiline
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <InputField
                        label="Content"
                        value={post.content}
                        onChange={(v) => updateBlog(post.id, { content: v })}
                        multiline
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "theme" && (
            <section className="rounded-sm border border-white/10 bg-[var(--color-secondary)] p-6">
              <h2 className="mb-6 font-serif text-lg font-bold text-white">
                Theme Colors
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {(
                  Object.keys(content.theme) as (keyof SiteContent["theme"])[]
                ).map((key) => (
                  <div key={key}>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                      {key.replace(/([A-Z])/g, " $1")}
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={content.theme[key]}
                        onChange={(e) => updateTheme(key, e.target.value)}
                        className="h-10 w-10 cursor-pointer rounded-sm border-0 bg-transparent"
                      />
                      <input
                        type="text"
                        value={content.theme[key]}
                        onChange={(e) => updateTheme(key, e.target.value)}
                        className="flex-1 rounded-sm border border-white/10 bg-[var(--color-background)] px-3 py-2 text-sm text-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-sm border border-white/10 p-6">
                <p className="mb-4 text-sm text-[var(--color-text-muted)]">
                  Preview
                </p>
                <div className="flex flex-wrap gap-3">
                  <span
                    className="rounded-sm px-4 py-2 text-sm font-semibold text-white"
                    style={{ backgroundColor: content.theme.primary }}
                  >
                    Primary
                  </span>
                  <span
                    className="rounded-sm px-4 py-2 text-sm font-semibold text-white"
                    style={{ backgroundColor: content.theme.accent }}
                  >
                    Accent
                  </span>
                  <span
                    className="rounded-sm border border-white/20 px-4 py-2 text-sm font-semibold"
                    style={{
                      backgroundColor: content.theme.secondary,
                      color: content.theme.text,
                    }}
                  >
                    Secondary
                  </span>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
