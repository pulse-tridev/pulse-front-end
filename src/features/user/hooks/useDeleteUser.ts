import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "../services/user.service";
import { useToast } from "@core/hooks/useToast";
import { userKeys } from "../queries";

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const { success, error } = useToast();

  return useMutation({
    mutationFn: (id: string) => UserService.delete(id),
    onSuccess: async () => {
      success("Usuário deletado com sucesso");
      await queryClient.invalidateQueries({
        queryKey: userKeys.all,
        exact: false,
      });
    },
    onError: (err: any) => {
      error(err?.message || "Falha ao deletar usuário");
    },
  });
}
