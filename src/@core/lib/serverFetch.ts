// Nota: este helper deve ser importado apenas em código server-side (App Router)
import { cookies } from "next/headers";

type ServerFetchInput = Parameters<typeof fetch>[0];
type ServerFetchInit = Parameters<typeof fetch>[1];

const BASE_URL =
  process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || "";

export async function serverFetch(
  input: ServerFetchInput,
  init?: ServerFetchInit
) {
  // Monta URL final com suporte a input absoluto e validação de BASE_URL
  let url: ServerFetchInput = input;
  if (typeof input === "string") {
    const isAbsolute = /^https?:\/\//i.test(input);
    if (isAbsolute) {
      url = input;
    } else {
      const base = (BASE_URL || "").replace(/\/+$/, "");
      const path = input.replace(/^\/+/, "");
      if (!base) {
        throw new Error(
          "API_BASE_URL/NEXT_PUBLIC_API_BASE_URL não definido no servidor para serverFetch()"
        );
      }
      url = `${base}/${path}`;
    }
  }

  // Encaminha os cookies da requisição atual para o backend (SSR)
  let cookieHeader: string | undefined;
  try {
    const jar = await cookies();
    const all = jar.getAll?.() || [];
    cookieHeader = all.map((c: any) => `${c.name}=${c.value}`).join("; ");
  } catch (_) {
    cookieHeader = undefined;
  }

  return fetch(
    url as any,
    {
      credentials: "include",
      cache: "no-store",
      headers: {
        ...(init?.headers as any),
        ...(cookieHeader ? { cookie: cookieHeader } : {}),
      },
      ...init,
    } as any
  );
}
