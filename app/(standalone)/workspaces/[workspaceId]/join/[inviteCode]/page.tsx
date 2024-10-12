import { getCurrent } from "@/features/auth/queries";
import { JoinWorkspaceForm } from "@/features/workspaces/components/join-workspace-form";
import { getWorkspaceInfo } from "@/features/workspaces/queries";
import { redirect } from "next/navigation";
import React from "react";

interface WorkSpaceJoinPageProps {
  params: {
    workspaceId: string;
    inviteCode: string;
  };
}

const WorkSpaceJoinPage = async ({
  params: { workspaceId },
}: WorkSpaceJoinPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initialValues = await getWorkspaceInfo({ workspaceId });

  if (!initialValues) redirect("/");

  return (
    <div className="w-full max-w-xl">
      <JoinWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkSpaceJoinPage;
