import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const REFRESH_COOKIE_NAME = "pulse_refresh_token";
const SESSION_FLAG_COOKIE = "pulse_session";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const refreshToken = body?.refreshToken as string | undefined;

    // Cookie persistente (expires) para sobreviver a fechamento do navegador
    const oneYearFromNow = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365);

    const store = await cookies();
    if (refreshToken) {
      store.set({
        name: REFRESH_COOKIE_NAME,
        value: refreshToken,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        expires: oneYearFromNow,
        path: "/",
      });
    }

    // Flag de sessão persistente para permitir acesso via middleware
    store.set({
      name: SESSION_FLAG_COOKIE,
      value: "1",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: oneYearFromNow,
      path: "/",
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao setar cookie" },
      { status: 500 }
    );
  }
}
