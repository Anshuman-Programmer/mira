import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import React from "react";

const WorkSpaceIdPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");
  return <div className="mt-[30vh] mx-auto"><Card className="w-full h-full md:w-[487px] border-none shadow-none bg-neutral-100">
  <CardHeader className="flex items-center justify-center text-center p-7">
    <CardTitle className="text-2xl">Please create a project</CardTitle>
  </CardHeader>
  <CardContent className="p-7 flex items-center justify-center">
    <p>Start by setting up a new project to begin working.</p>
  </CardContent>
</Card></div>;
};

export default WorkSpaceIdPage;
