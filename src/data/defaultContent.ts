import { SiteContent } from "@/types/site";

export const STORAGE_KEY = "dante-lodge-174-content";

export const defaultContent: SiteContent = {
  theme: {
    primary: "#059669",
    secondary: "#0D0D0D",
    accent: "#DC2626",
    background: "#1A1A1A",
    text: "#FFFFFF",
    textMuted: "#D1D5DB",
  },
  hero: {
    headline: "Why Become a Mason",
    subheadline:
      "A brotherhood of men who come together to improve themselves, support one another, and serve their communities.",
    ctaPrimary: "Learn More About Us",
    ctaSecondary: "Get In Touch",
  },
  about: {
    title: "What Freemasonry Is",
    content:
      "Masonry is a brotherhood of men who come together to improve themselves, support one another, and serve their communities. It is built on timeless values—integrity, kindness, and a commitment to becoming better every day. Through fellowship, reflection, and meaningful work, Masons strive to make a positive impact on their families, their professions, and the world around them.",
  },
  pillars: [
    {
      title: "Integrity",
      description:
        "We hold ourselves to the highest moral standards, striving to be honest, trustworthy, and principled in all we do.",
      icon: "integrity",
    },
    {
      title: "Fellowship",
      description:
        "Brotherhood binds us together—supporting one another through life's challenges and celebrating shared victories.",
      icon: "fellowship",
    },
    {
      title: "Community Impact",
      description:
        "Service to others is at our core. We actively contribute to our communities through charity, mentorship, and civic engagement.",
      icon: "community",
    },
  ],
  contact: {
    phone: "+1 228-223-7499",
    email: "1markahopkins@gmail.com",
    location: "Dante Lodge #174 - Louisiana",
    facebook: "https://facebook.com",
  },
  officers: [
    {
      id: "1",
      name: "Worshipful Master",
      title: "Worshipful Master",
      termYears: "2025–2026",
      bio: "Leads the lodge with wisdom and dedication, guiding brothers in their Masonic journey.",
      photoUrl: "",
      isPast: false,
    },
    {
      id: "2",
      name: "Senior Warden",
      title: "Senior Warden",
      termYears: "2025–2026",
      bio: "Assists the Worshipful Master and prepares to lead the lodge in the year ahead.",
      photoUrl: "",
      isPast: false,
    },
    {
      id: "3",
      name: "Junior Warden",
      title: "Junior Warden",
      termYears: "2025–2026",
      bio: "Oversees the craft during refreshment and ensures the lodge's harmony and fellowship.",
      photoUrl: "",
      isPast: false,
    },
    {
      id: "4",
      name: "Secretary",
      title: "Secretary",
      termYears: "2025–2026",
      bio: "Maintains lodge records, correspondence, and ensures proper documentation of all proceedings.",
      photoUrl: "",
      isPast: false,
    },
    {
      id: "5",
      name: "Treasurer",
      title: "Treasurer",
      termYears: "2025–2026",
      bio: "Stewards the lodge's finances with transparency and accountability.",
      photoUrl: "",
      isPast: false,
    },
    {
      id: "6",
      name: "Past Master",
      title: "Past Worshipful Master",
      termYears: "2023–2024",
      bio: "Continues to serve the lodge with experience and wisdom gained from years of leadership.",
      photoUrl: "",
      isPast: true,
    },
  ],
  gallery: [
    {
      id: "1",
      title: "Lodge Installation Ceremony",
      category: "events",
      imageUrl: "https://images.unsplash.com/photo-1519167758481-83f29daae6a5?w=800&q=80",
      description: "Annual installation of lodge officers.",
    },
    {
      id: "2",
      title: "Community Food Drive",
      category: "service",
      imageUrl: "https://images.unsplash.com/photo-1488526537947-ffd890663d76?w=800&q=80",
      description: "Brothers volunteering at a local food bank.",
    },
    {
      id: "3",
      title: "Historical Lodge Portrait",
      category: "history",
      imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
      description: "A glimpse into our lodge's rich heritage.",
    },
    {
      id: "4",
      title: "Charity Golf Tournament",
      category: "events",
      imageUrl: "https://images.unsplash.com/photo-1535131749006-b7f58c990339?w=800&q=80",
      description: "Annual fundraiser supporting local charities.",
    },
    {
      id: "5",
      title: "Youth Scholarship Program",
      category: "service",
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da280a0b?w=800&q=80",
      description: "Supporting education in our community.",
    },
    {
      id: "6",
      title: "Lodge Building Heritage",
      category: "history",
      imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      description: "Our lodge home through the decades.",
    },
  ],
  faq: [
    {
      id: "1",
      question: "What are the requirements to join Dante Lodge #174?",
      answer:
        "To petition for membership, you must be a man of good character, at least 18 years of age, believe in a Supreme Being, and be recommended by two members of the lodge. You should be motivated by a desire to improve yourself and serve your community.",
    },
    {
      id: "2",
      question: "When does Dante Lodge #174 meet?",
      answer:
        "We hold stated meetings on the first and third Thursday of each month at 7:00 PM. Special meetings and degree work may be scheduled on additional dates. Contact us for the most current schedule.",
    },
    {
      id: "3",
      question: "What happens during the first visit?",
      answer:
        "Prospective members are welcome to attend an open event or dinner. You'll meet brothers, learn about our values and activities, and have the opportunity to ask questions in a relaxed, welcoming environment.",
    },
    {
      id: "4",
      question: "Is Freemasonry a religion?",
      answer:
        "No. Freemasonry is not a religion, nor is it a substitute for religion. We require a belief in a Supreme Being, but we welcome men of all faiths. We focus on moral and spiritual development, not religious doctrine.",
    },
    {
      id: "5",
      question: "How long does it take to become a Mason?",
      answer:
        "The process typically takes several months. After submitting a petition and meeting with members, you'll progress through three degrees: Entered Apprentice, Fellowcraft, and Master Mason. Each degree involves study and reflection.",
    },
    {
      id: "6",
      question: "What does it mean to be a Mason?",
      answer:
        "Being a Mason means joining a worldwide fraternity dedicated to making good men better. It means living with integrity, supporting your brothers, and giving back to your community through service and charity.",
    },
  ],
  blog: [
    {
      id: "1",
      title: "Upcoming Stated Meeting — March 2026",
      excerpt:
        "Join us for our next stated meeting. All Master Masons in good standing are welcome.",
      content:
        "Our next stated meeting will be held on the first Thursday of March at 7:00 PM. Dinner will be served at 6:30 PM. Please RSVP through the Secretary if you plan to attend.",
      date: "2026-03-01",
      category: "Events",
      imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    },
    {
      id: "2",
      title: "Community Service Day Success",
      excerpt:
        "Brothers volunteered over 200 hours at local charities this quarter.",
      content:
        "Dante Lodge #174 brothers came together for our quarterly community service day, supporting food banks, youth programs, and veterans' organizations across Louisiana.",
      date: "2026-02-15",
      category: "Community",
      imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    },
    {
      id: "3",
      title: "The Three Great Principles of Freemasonry",
      excerpt:
        "Brotherly Love, Relief, and Truth—the foundation of our craft.",
      content:
        "Freemasonry is built upon three great principles: Brotherly Love (kindness and understanding toward all), Relief (charitable support for those in need), and Truth (honesty and integrity in word and deed).",
      date: "2026-01-20",
      category: "Education",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    },
  ],
};
