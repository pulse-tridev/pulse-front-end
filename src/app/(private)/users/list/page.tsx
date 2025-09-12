import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "../../../get-query-client";
import UsersListClient from "src/features/user/components/UsersListClient";
import { UserServiceServer } from "src/features/user/services/user.server";
import { UserService } from "src/features/user/services/user.service";

export const dynamic = "force-dynamic";

export default async function UsersListPage() {
  // Força consumo do service server-side (fetch com cookies do request)
  let teste;
  let errorText;
  try {
    teste = await UserServiceServer.getAll();
    console.log(teste);
  } catch (error) {
    console.log(error);
    errorText = error;
  }

  // return <UsersListClient />;
  return <div>{teste?.data.length}</div>;
}
