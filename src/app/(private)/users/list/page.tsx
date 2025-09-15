import UsersListClient from "src/features/user/components/UsersListClient";
import { UserServiceServer } from "src/features/user/services/user.server";

export default async function UsersListPage() {
  let teste;
  let errorText: string | null = null;
  try {
    teste = await UserServiceServer.getAll();
    console.log(teste);
  } catch (error) {
    console.log(error);
    errorText = error instanceof Error ? error.message : String(error);
  }

  // if (errorText) {
  //   return <UsersListClient />;
  // }

  return (
    <div>
      {teste?.data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
