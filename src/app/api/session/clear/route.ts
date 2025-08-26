import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const REFRESH_COOKIE_NAME = "pulse_refresh_token";
const SESSION_FLAG_COOKIE = "pulse_session";

export async function POST() {
  try {
    const store = await cookies();
    store.set({
      name: REFRESH_COOKIE_NAME,
      value: "",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: new Date(0),
      path: "/",
    });
    store.set({
      name: SESSION_FLAG_COOKIE,
      value: "",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: new Date(0),
      path: "/",
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao limpar cookie" },
      { status: 500 }
    );
  }
}
