"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useSite } from "@/context/SiteProvider";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  age: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  age?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!data.phone.trim()) errors.phone = "Phone is required";
  if (!data.age.trim()) {
    errors.age = "Age is required";
  } else {
    const ageNum = parseInt(data.age, 10);
    if (isNaN(ageNum) || ageNum < 18) {
      errors.age = "You must be at least 18 years old";
    }
  }
  if (!data.message.trim()) errors.message = "Message is required";
  return errors;
}

export function ContactForm() {
  const { content } = useSite();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    age: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-sm border border-[var(--color-primary)]/30 bg-[var(--color-secondary)] p-8 text-center"
      >
        <CheckCircle className="mx-auto h-16 w-16 text-[var(--color-primary)]" />
        <h3 className="mt-4 font-serif text-2xl font-bold text-white">
          Thank You!
        </h3>
        <p className="mt-2 text-[var(--color-text-muted)]">
          Your message has been received. A brother will contact you at{" "}
          {form.email} shortly.
        </p>
      </motion.div>
    );
  }

  const fields: {
    name: keyof FormData;
    label: string;
    type: string;
    rows?: number;
  }[] = [
    { name: "name", label: "Full Name", type: "text" },
    { name: "email", label: "Email Address", type: "email" },
    { name: "phone", label: "Phone Number", type: "tel" },
    { name: "age", label: "Age", type: "number" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="mb-2 block text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]"
            >
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              value={form[field.name]}
              onChange={handleChange}
              className={cn(
                "w-full rounded-sm border bg-[var(--color-background)] px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]",
                errors[field.name]
                  ? "border-[var(--color-accent)]"
                  : "border-white/10"
              )}
              placeholder={`Enter your ${field.label.toLowerCase()}`}
            />
            {errors[field.name] && (
              <p className="mt-1 flex items-center gap-1 text-xs text-[var(--color-accent)]">
                <AlertCircle className="h-3 w-3" />
                {errors[field.name]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={cn(
            "w-full rounded-sm border bg-[var(--color-background)] px-4 py-3 text-white placeholder:text-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]",
            errors.message
              ? "border-[var(--color-accent)]"
              : "border-white/10"
          )}
          placeholder="Tell us about yourself and why you're interested in Freemasonry..."
        />
        {errors.message && (
          <p className="mt-1 flex items-center gap-1 text-xs text-[var(--color-accent)]">
            <AlertCircle className="h-3 w-3" />
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        <Send className="h-5 w-5" />
        Send Message
      </Button>

      <p className="text-xs text-[var(--color-text-muted)]/60">
        Or reach us directly at{" "}
        <a
          href={`mailto:${content.contact.email}`}
          className="text-[var(--color-primary)] hover:underline"
        >
          {content.contact.email}
        </a>
      </p>
    </form>
  );
}
