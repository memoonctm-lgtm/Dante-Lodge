import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import {
  ADMIN_COOKIE,
  SESSION_DURATION_SECONDS,
  createSessionToken,
  getAdminCredentials,
} from "@/lib/auth";

function safeCompare(a: string, b: string): boolean {
  try {
    const bufA = Buffer.from(a);
    const bufB = Buffer.from(b);
    if (bufA.length !== bufB.length) return false;
    return timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  const credentials = getAdminCredentials();

  if (!credentials) {
    return NextResponse.json(
      {
        error:
          "Admin authentication is not configured. Set ADMIN_USERNAME, ADMIN_PASSWORD, and ADMIN_SECRET in your environment.",
      },
      { status: 503 }
    );
  }

  let body: { username?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json(
      { error: "Username and password are required." },
      { status: 400 }
    );
  }

  const isValid =
    safeCompare(username, credentials.username) &&
    safeCompare(password, credentials.password);

  if (!isValid) {
    return NextResponse.json(
      { error: "Invalid username or password." },
      { status: 401 }
    );
  }

  const token = await createSessionToken(username, credentials.secret);
  const response = NextResponse.json({ success: true });

  response.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  });

  return response;
}
