import { getCurrent } from "@/features/auth/queries";
import MembersList from "@/features/workspaces/components/members-list";
import { redirect } from "next/navigation";
import React from "react";

interface WorkspaceMembersPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceMembersPage = async ({
  params: { workspaceId },
}: WorkspaceMembersPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return (
    <div className="w-full max-w-xl">
      <MembersList workspaceId={workspaceId} />
    </div>
  );
};

export default WorkspaceMembersPage;
