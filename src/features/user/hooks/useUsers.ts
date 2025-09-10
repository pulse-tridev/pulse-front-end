import { useQuery } from "@tanstack/react-query";
import { UserService } from "../services/user.service";
import type { z } from "zod";
import { paginatedResponseSchema } from "@core/schemas/api.schema";
import { UserSchema } from "../schemas/user.schema";

const UsersListSchema = paginatedResponseSchema(UserSchema);
export type UsersList = z.infer<typeof UsersListSchema>;

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => UserService.getAll(),
  });
}
