import { timingSafeEqual } from "crypto";
import {
  ADMIN_COOKIE,
  SESSION_DURATION_SECONDS,
} from "@/lib/auth-edge";

export { ADMIN_COOKIE, SESSION_DURATION_SECONDS };

interface SessionPayload {
  exp: number;
  sub: string;
}

async function sign(data: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(data)
  );
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function createSessionToken(
  username: string,
  secret: string
): Promise<string> {
  const payload: SessionPayload = {
    sub: username,
    exp: Date.now() + SESSION_DURATION_SECONDS * 1000,
  };
  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64");
  const signature = await sign(payloadB64, secret);
  return `${payloadB64}.${signature}`;
}

export function getAdminCredentials() {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SECRET;

  if (!username || !password || !secret) {
    return null;
  }

  if (secret.length < 32) {
    return null;
  }

  return { username, password, secret };
}

export function safeCompare(a: string, b: string): boolean {
  try {
    const bufA = Buffer.from(a);
    const bufB = Buffer.from(b);
    if (bufA.length !== bufB.length) return false;
    return timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}
