export const decodeToken = <T = any>(
  token: string | null | undefined
): T | null => {
  try {
    if (!token || typeof token !== "string") return null;
    const [, payload] = token.split(".");

    if (!payload) {
      return null;
    }

    const decoded = Buffer.from(payload, "base64").toString("utf-8");
    return JSON.parse(decoded) as T;
  } catch (error) {
    console.error("Erro ao decodificar token:", error);
    return null;
  }
};
