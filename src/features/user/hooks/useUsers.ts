import { useQuery } from "@tanstack/react-query";
import { UserService } from "../services/user.service";
import { usersQuery } from "../queries";

export function useUsers() {
  return useQuery(usersQuery(UserService));
}
