import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserFormData } from "./createUserForm.schema";
import { createUserSchema } from "./createUserForm.schema";
import { useCreateUser } from "../../../hooks/useCreateUser";

export function useCreateUserForm() {
  const form = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserSchema),
  });

  const createUserMutation = useCreateUser();

  return { form, createUserMutation };
}
