// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// // import { i18n } from "./lib/i18n-config";

// let locales = ["en", "mn"];

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Check if the pathname starts with a locale
//   const pathnameHasLocale = locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   );

//   if (pathnameHasLocale) return;

//   // Get locale from cookie or default to English

//   request.nextUrl.pathname = `/mn/${pathname}`;

//   // Redirect to the locale path
//   return NextResponse.redirect(request.nextUrl);
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./src/lib/i18n-config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname starts with a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Get locale from cookie or default to English
  const locale =
    request.cookies.get("NEXT_LOCALE")?.value || i18n.defaultLocale;

  // Redirect to the locale path
  return NextResponse.redirect(
    new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
