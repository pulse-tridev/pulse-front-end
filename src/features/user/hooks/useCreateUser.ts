import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "../services/user.service";
import type { CreateUser, User } from "../schemas/user.schema";
import { useToast } from "@core/hooks/useToast";
import { userKeys } from "../queries";

export function useCreateUser() {
  const queryClient = useQueryClient();
  const { success, error } = useToast();

  return useMutation<User, Error, CreateUser>({
    mutationFn: (payload) => UserService.create(payload),
    onSuccess: async () => {
      success("Usuário criado com sucesso");
      await queryClient.invalidateQueries({
        queryKey: userKeys.all,
        exact: false,
      });
    },
    onError: (err) => {
      error(err.message || "Falha ao criar usuário");
    },
  });
}
