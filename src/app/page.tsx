import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Home() {
  const jar = await cookies();
  const hasSession = jar.get("pulse_session");
  redirect(hasSession ? "/users/list" : "/signin");
}
