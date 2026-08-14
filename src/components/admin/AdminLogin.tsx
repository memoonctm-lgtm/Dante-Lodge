"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Lock, AlertCircle, ArrowLeft } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function AdminLogin() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("from") || "/admin";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed. Please try again.");
        return;
      }

      router.push(redirectTo);
      router.refresh();
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-background)] px-4">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, var(--color-primary) 0%, transparent 50%)`,
        }}
      />

      <div className="relative w-full max-w-md">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Site
        </Link>

        <div className="rounded-sm border border-white/10 bg-[var(--color-secondary)] p-8 shadow-2xl shadow-black/40">
          <div className="mb-8 flex flex-col items-center text-center">
            <Logo size="md" showText={false} />
            <h1 className="mt-4 font-serif text-2xl font-bold text-white">
              Admin Login
            </h1>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Sign in to manage Dante Lodge #174 content
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
                className="w-full rounded-sm border border-white/10 bg-[var(--color-background)] px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                placeholder="Enter admin username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="w-full rounded-sm border border-white/10 bg-[var(--color-background)] px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                placeholder="Enter admin password"
              />
            </div>

            {error && (
              <div className="flex items-start gap-2 rounded-sm border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-3 text-sm text-[var(--color-accent)]">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={loading}
              className={cn("w-full", loading && "opacity-70")}
            >
              <Lock className="h-5 w-5" />
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-[var(--color-text-muted)]/60">
          Authorized lodge administrators only
        </p>
      </div>
    </div>
  );
}
