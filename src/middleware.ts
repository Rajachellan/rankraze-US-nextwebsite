import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCATION_PAGES = new Set([
  "digital-marketing-agency-in-bangalore",
  "digital-marketing-agency-in-delhi-india",
  "digital-marketing-agency-in-mumbai",
]);

export function middleware(request: NextRequest) {
  const slug = request.nextUrl.pathname.replace(/^\//, "");

  if (
    slug.startsWith("digital-marketing-agency-in-") &&
    !LOCATION_PAGES.has(slug)
  ) {
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/digital-marketing-agency-in-:path*"],
};
