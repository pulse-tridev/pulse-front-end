import { NextRequest, NextResponse } from "next/server";

const REFRESH_COOKIE_NAME = "pulse_refresh_token";
const SESSION_FLAG_COOKIE = "pulse_session";

function isProtectedPath(pathname: string): boolean {
  return (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/doctor") ||
    pathname.startsWith("/secretary")
  );
}

function isAuthPath(pathname: string): boolean {
  return pathname === "/signin";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasRefreshCookie = request.cookies.has(REFRESH_COOKIE_NAME);
  const hasSessionFlag = request.cookies.has(SESSION_FLAG_COOKIE);

  // 1) Bloqueia rotas privadas sem cookie de sessão
  if (isProtectedPath(pathname) && !(hasRefreshCookie || hasSessionFlag)) {
    const url = request.nextUrl.clone();
    url.pathname = "/signin";
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  // 2) Evita acessar /signin quando já autenticado
  if (isAuthPath(pathname) && (hasRefreshCookie || hasSessionFlag)) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/home";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/doctor/:path*", "/secretary/:path*", "/signin"],
};
