import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { User } from "src/features/user/types";

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const sessionFlag = cookieStore.get("pulse_session");

    if (!sessionFlag) {
      return NextResponse.json({ message: "Não autenticado" }, { status: 401 });
    }

    // Aqui você faria uma chamada para seu backend para obter os dados do usuário
    // baseado nos cookies HttpOnly que contêm os tokens
    // Exemplo de implementação:

    // const backendResponse = await fetch(`${process.env.BACKEND_URL}/auth/me`, {
    //   headers: {
    //     'Cookie': request.headers.get('cookie') || '',
    //   },
    // });
    // const user = await backendResponse.json();

    // Por enquanto, retornamos dados mockados
    const user = {
      id: "1",
      name: "Usuário Teste",
      email: "usuario@teste.com",
      role: "ADMIN",
    };

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
