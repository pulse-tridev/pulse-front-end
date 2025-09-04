import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const SESSION_FLAG_COOKIE = "pulse_session";

export async function POST() {
  try {
    const store = await cookies();
    store.delete(SESSION_FLAG_COOKIE);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao limpar flag" },
      { status: 500 }
    );
  }
}
