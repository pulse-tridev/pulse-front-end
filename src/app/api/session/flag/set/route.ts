import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const SESSION_FLAG_COOKIE = "pulse_session";

export async function POST() {
  try {
    const oneYearFromNow = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365);
    const store = await cookies();
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
      { message: "Erro ao setar flag" },
      { status: 500 }
    );
  }
}
