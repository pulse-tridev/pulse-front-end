import { useQuery } from "@tanstack/react-query";
import { UserService } from "../services/user.service";

export function useUser(username: string | undefined) {
  return useQuery({
    queryKey: ["user", username],
    queryFn: () => UserService.getByUsername(username as string),
    enabled: Boolean(username),
  });
}
