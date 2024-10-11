import { getCurrent } from "@/features/auth/actions";
import { CreateWorkspaceForm } from "@/features/components/create-workspace-form";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return (
    <>
      <CreateWorkspaceForm />
    </>
  );
}
