import "server-only";
import { serverFetch } from "@core/lib/serverFetch";
import { z } from "zod";
import { UserSchema } from "../schemas/user.schema";
import { paginatedResponseSchema } from "@core/schemas/api.schema";

const UserListResponseSchema = paginatedResponseSchema(UserSchema);
type UserListResponse = z.infer<typeof UserListResponseSchema>;

export const UserServiceServer = {
  async getAll(): Promise<UserListResponse> {
    const res = await serverFetch("/user/find-all");
    if (!res.ok) {
      let errorBody = "";
      try {
        errorBody = await res.text();
      } catch (_) {}
      throw new Error(
        `Falha ao buscar usuários (SSR) [${res.status} ${
          res.statusText
        }] ${errorBody?.slice(0, 300)}`
      );
    }
    const data = await res.json();
    return UserListResponseSchema.parse(data);
  },
  async getByUsername(username: string) {
    const res = await serverFetch(`/user/find-by-username/${username}`);
    if (!res.ok) {
      let errorBody = "";
      try {
        errorBody = await res.text();
      } catch (_) {}
      throw new Error(
        `Falha ao buscar usuário (SSR) [${res.status} ${
          res.statusText
        }] ${errorBody?.slice(0, 300)}`
      );
    }
    const data = await res.json();
    return UserSchema.parse(data);
  },
};
