import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../api/auth.dto";

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUserProfile,
    retry: false,
    staleTime: 1000 * 60 * 5, // 5min
  });
}
