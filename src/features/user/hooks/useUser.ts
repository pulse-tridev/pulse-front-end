import { useQuery } from "@tanstack/react-query";
import { UserService } from "../services/user.service";
import { userQuery } from "../queries";
import type { User } from "../schemas/user.schema";

export function useUser(username: string | undefined) {
  return useQuery<User, Error>({
    ...userQuery(UserService, (username ?? "") as string),
    enabled: Boolean(username),
  });
}
