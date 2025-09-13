import { NextRequest, NextResponse } from "next/server";

const SESSION_FLAG_COOKIE = "pulse_session";

function isProtectedPath(pathname: string): boolean {
  return (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/doctor") ||
    pathname.startsWith("/secretary") ||
    pathname.startsWith("/users")
  );
}

function isAuthPath(pathname: string): boolean {
  return pathname === "/signin";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasSessionFlag = request.cookies.has(SESSION_FLAG_COOKIE);

  // Bloqueia rotas privadas sem flag de sessão
  if (isProtectedPath(pathname) && !hasSessionFlag) {
    const url = request.nextUrl.clone();
    url.pathname = "/signin";
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  // Evita acessar /signin quando já autenticado
  if (isAuthPath(pathname) && hasSessionFlag) {
    const url = request.nextUrl.clone();
    url.pathname = "/users/list";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// export const config = {
//   matcher: [
//     "/admin/:path*",
//     "/doctor/:path*",
//     "/secretary/:path*",
//     "/users/:path*",
//     "/signin",
//   ],
// };

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
