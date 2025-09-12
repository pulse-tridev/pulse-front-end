import type { User } from "./schemas/user.schema";
import type { UserListResponse } from "./services/user.service";

export const userKeys = {
  all: ["users"] as const,
  byUsername: (username: string) => ["user", username] as const,
};

export interface UserApi {
  getAll: () => Promise<UserListResponse>;
  getByUsername: (username: string) => Promise<User>;
}

export const usersQuery = (api: UserApi) => ({
  queryKey: userKeys.all,
  queryFn: () => api.getAll(),
});

export const userQuery = (
  api: UserApi,
  username: string,
) => ({
  queryKey: userKeys.byUsername(username),
  queryFn: () => api.getByUsername(username),
});
