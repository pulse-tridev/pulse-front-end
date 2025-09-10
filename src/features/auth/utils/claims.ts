import { Claims, ClaimsSchema } from "../schemas/claims.schema";
import { decodeToken } from "./decodeToken";
import { AuthUser } from "../types";

export function parseClaimsFromAccessToken(
  accessToken: string | null | undefined
): Claims | null {
  const decoded = decodeToken<unknown>(accessToken);
  if (!decoded || typeof decoded !== "object") return null;
  const parsed = ClaimsSchema.safeParse(decoded);
  if (!parsed.success) return null;
  return parsed.data;
}

export function extractUserFromAccessToken(
  accessToken: string | null | undefined
): AuthUser | null {
  const claims = parseClaimsFromAccessToken(accessToken);
  if (!claims) return null;
  return {
    email: claims.email,
    name: claims.name,
    role: claims.role,
  } as AuthUser;
}
