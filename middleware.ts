import createMiddleware from "next-intl/middleware";
import { routing } from "./app/i18n/routing";
import { NextRequest, NextResponse } from "next/server";

// export default createMiddleware(routing);

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  const isBlogPath =
    pathname === "/blog" || pathname === "/en/blog" || pathname === "/az/blog";

  // Check if the path is /blog or a localized /blog route
  if (isBlogPath && !searchParams.has("page")) {
    // Redirect to the same path with ?page=1
    const url = request.nextUrl.clone();
    url.searchParams.set("page", "1");
    return NextResponse.redirect(url);
  }

  // Continue with the next-intl middleware
  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(az|en)/:path*"],
};
