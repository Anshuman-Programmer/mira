import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { CreateProjectModel } from "@/features/projects/components/create-project-model";
import { CreateTaskModel } from "@/features/tasks/components/create-task-model";
import { CreateWorkspaceModel } from "@/features/workspaces/components/create-workspace-model";
import React, { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen ">
      <CreateWorkspaceModel />
      <CreateProjectModel />
      <CreateTaskModel />
      <div className="flex w-full h-full">
        <div className="fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-auto">
          <Sidebar />
        </div>
        <div className="lg:pl-[264px] w-full">
          <div className="max-w-screen-2xl mx-auto h-full">
            <Navbar />
            <main className="h-full py-8 px-6 flex flex-col">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
