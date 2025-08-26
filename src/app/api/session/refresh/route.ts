import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const REFRESH_COOKIE_NAME = "pulse_refresh_token";
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL;

export async function POST() {
  try {
    const store = await cookies();
    const refreshToken = store.get(REFRESH_COOKIE_NAME)?.value;
    if (!refreshToken) {
      return NextResponse.json(
        { message: "Sem refresh token" },
        { status: 401 }
      );
    }

    if (!API_BASE_URL) {
      return NextResponse.json(
        { message: "API_BASE_URL não configurado" },
        { status: 500 }
      );
    }

    const resp = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
      // Não envia credenciais do navegador; chamada é server-to-server
      cache: "no-store",
    });

    if (!resp.ok) {
      return NextResponse.json(
        { message: "Falha no refresh" },
        { status: resp.status }
      );
    }

    const data = await resp.json();

    // Se o backend rotacionar o refreshToken, atualiza nosso cookie persistente
    const newRefreshToken = data?.refreshToken as string | undefined;
    if (newRefreshToken && newRefreshToken !== refreshToken) {
      const oneYearFromNow = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365);
      store.set({
        name: REFRESH_COOKIE_NAME,
        value: newRefreshToken,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        expires: oneYearFromNow,
        path: "/",
      });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Erro interno no refresh" },
      { status: 500 }
    );
  }
}
