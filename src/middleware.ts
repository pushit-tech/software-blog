import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { LANGUAGES } from "./locales/model";
import { NextResponse, NextRequest } from "next/server";

let locales = [LANGUAGES.ENGLISH, LANGUAGES.SPANISH];

function getLocale(request: { nextUrl: URL }) {
  let headers = {
    "accept-language": `${LANGUAGES.ENGLISH},${LANGUAGES.SPANISH};q=0.5`,
  };
  let languages = new Negotiator({ headers }).languages();
  let defaultLocale = LANGUAGES.ENGLISH;
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log("middleware", pathname);

  if (isCurrentPathWithLocale(pathname)) {
    return;
  }

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

const isCurrentPathWithLocale = (pathname: string) =>
  locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/"],
};
