import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, ADMIN_COOKIE } from "./src/lib/auth-edge";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    const secret = process.env.ADMIN_SECRET;
    const token = request.cookies.get(ADMIN_COOKIE)?.value;

    if (!secret || !token || !(await verifySessionToken(token, secret))) {
      const loginUrl = new URL("/admin/login", request.url);
      if (pathname !== "/admin") {
        loginUrl.searchParams.set("from", pathname);
      }
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
