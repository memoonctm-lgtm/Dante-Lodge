import { Suspense } from "react";
import { AdminLogin } from "@/components/admin/AdminLogin";

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[var(--color-background)] text-[var(--color-text-muted)]">
          Loading...
        </div>
      }
    >
      <AdminLogin />
    </Suspense>
  );
}
