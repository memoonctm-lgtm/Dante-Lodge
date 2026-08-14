export const ADMIN_COOKIE = "admin_session";
export const SESSION_DURATION_SECONDS = 60 * 60 * 24; // 24 hours

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

export async function verifySessionToken(
  token: string,
  secret: string
): Promise<boolean> {
  try {
    const [payloadB64, signature] = token.split(".");
    if (!payloadB64 || !signature) return false;

    const expectedSignature = await sign(payloadB64, secret);
    if (signature !== expectedSignature) return false;

    const payload = JSON.parse(atob(payloadB64)) as SessionPayload;
    return payload.exp > Date.now();
  } catch {
    return false;
  }
}
