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
  const url = typeof input === "string" ? `${BASE_URL}${input}` : input;

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
