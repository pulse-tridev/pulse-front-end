import { Claims, ClaimsSchema } from "../models/claims.model";
import { decodeToken } from "./decodeToken";
import { User } from "../models/user.model";

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
): User | null {
  const claims = parseClaimsFromAccessToken(accessToken);
  if (!claims) return null;
  return {
    email: claims.email,
    name: claims.name,
    role: claims.role,
  } as User;
}
