import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();

    // Limpa a flag de sessão
    cookieStore.delete("pulse_session");

    // Aqui você poderia fazer uma chamada para o backend para invalidar tokens
    // se necessário, mas como estamos usando cookies HttpOnly, o backend
    // já cuida da invalidação dos tokens

    return NextResponse.json({ message: "Logout realizado com sucesso" });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
