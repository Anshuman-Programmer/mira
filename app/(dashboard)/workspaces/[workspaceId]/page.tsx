import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import React from "react";

const WorkSpaceIdPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");
  return <div>Workspace id</div>;
};

export default WorkSpaceIdPage;
