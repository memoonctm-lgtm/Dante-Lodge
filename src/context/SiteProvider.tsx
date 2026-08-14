"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { defaultContent, STORAGE_KEY } from "@/data/defaultContent";
import { SiteContent } from "@/types/site";

interface SiteContextValue {
  content: SiteContent;
  updateContent: (updates: Partial<SiteContent>) => void;
  resetContent: () => void;
  isLoaded: boolean;
}

const SiteContext = createContext<SiteContextValue | null>(null);

function mergeContent(stored: Partial<SiteContent>): SiteContent {
  return {
    ...defaultContent,
    ...stored,
    theme: { ...defaultContent.theme, ...stored.theme },
    hero: { ...defaultContent.hero, ...stored.hero },
    about: { ...defaultContent.about, ...stored.about },
    contact: { ...defaultContent.contact, ...stored.contact },
    pillars: stored.pillars ?? defaultContent.pillars,
    officers: stored.officers ?? defaultContent.officers,
    gallery: stored.gallery ?? defaultContent.gallery,
    faq: stored.faq ?? defaultContent.faq,
    blog: stored.blog ?? defaultContent.blog,
  };
}

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<SiteContent>;
        setContent(mergeContent(parsed));
      }
    } catch {
      setContent(defaultContent);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    applyThemeVariables(content.theme);
  }, [content, isLoaded]);

  const updateContent = useCallback((updates: Partial<SiteContent>) => {
    setContent((prev) => mergeContent({ ...prev, ...updates }));
  }, []);

  const resetContent = useCallback(() => {
    setContent(defaultContent);
    localStorage.removeItem(STORAGE_KEY);
    applyThemeVariables(defaultContent.theme);
  }, []);

  const value = useMemo(
    () => ({ content, updateContent, resetContent, isLoaded }),
    [content, updateContent, resetContent, isLoaded]
  );

  return (
    <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}

function applyThemeVariables(theme: SiteContent["theme"]) {
  const root = document.documentElement;
  root.style.setProperty("--color-primary", theme.primary);
  root.style.setProperty("--color-secondary", theme.secondary);
  root.style.setProperty("--color-accent", theme.accent);
  root.style.setProperty("--color-background", theme.background);
  root.style.setProperty("--color-text", theme.text);
  root.style.setProperty("--color-text-muted", theme.textMuted);
}
