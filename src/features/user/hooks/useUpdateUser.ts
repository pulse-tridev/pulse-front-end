import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "../services/user.service";
import type { UpdateUser } from "../schemas/user.schema";
import { useToast } from "@core/hooks/useToast";
import { userKeys } from "../queries";

type UpdateArgs = { id: string; data: UpdateUser };

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { success, error } = useToast();

  return useMutation({
    mutationFn: ({ id, data }: UpdateArgs) => UserService.update(id, data),
    onSuccess: async (_res, variables) => {
      success("Usuário atualizado com sucesso");
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: userKeys.all, exact: false }),
        queryClient.invalidateQueries({
          queryKey: userKeys.byUsername(
            (variables as any)?.data?.username || ""
          ),
          exact: false,
        }),
      ]);
    },
    onError: (err: any) => {
      error(err?.message || "Falha ao atualizar usuário");
    },
  });
}
