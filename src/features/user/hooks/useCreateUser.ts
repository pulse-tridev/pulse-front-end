    import { useMutation, useQueryClient } from "@tanstack/react-query";
    import { UserService } from "../services/user.service";
    import type { CreateUser, User } from "../schemas/user.schema";
    import { useToast } from "@core/hooks/useToast";

    export function useCreateUser() {
    const queryClient = useQueryClient();
    const { success, error } = useToast();

    return useMutation<User, Error, CreateUser>({
        mutationFn: (payload) => UserService.create(payload),
        onSuccess: async () => {
        success("Usuário criado com sucesso");
        await queryClient.invalidateQueries({
            queryKey: ["users"],
            exact: false,
        });
        },
        onError: (err) => {
        error(err.message || "Falha ao criar usuário");
        },
    });
    }
