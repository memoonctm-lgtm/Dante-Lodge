export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  textMuted: string;
}

export interface Officer {
  id: string;
  name: string;
  title: string;
  termYears: string;
  bio: string;
  photoUrl: string;
  isPast: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "events" | "service" | "history";
  imageUrl: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: "integrity" | "fellowship" | "community";
}

export interface SiteContent {
  theme: ThemeColors;
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    content: string;
  };
  pillars: Pillar[];
  contact: {
    phone: string;
    email: string;
    location: string;
    facebook: string;
  };
  officers: Officer[];
  gallery: GalleryItem[];
  faq: FAQItem[];
  blog: BlogPost[];
}

export type GalleryCategory = GalleryItem["category"] | "all";
