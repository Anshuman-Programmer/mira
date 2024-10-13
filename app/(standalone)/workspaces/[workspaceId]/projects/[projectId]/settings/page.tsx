import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { getProject } from "@/features/projects/queries";
import { EditProjectForm } from "@/features/projects/components/edit-project-form";

interface ProjectIdSettingsPageProps {
  params: {
    workspaceId: string;
    projectId: string;
  };
}
const ProjectIdSettingsPage = async ({
  params: { workspaceId, projectId },
}: ProjectIdSettingsPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const project = await getProject({ projectId });

  if (!project) redirect(`/workspaces/${workspaceId}`);

  return (
    <div className="w-full lg:max-w-xl">
      <EditProjectForm initialValues={project} />
    </div>
  );
};

export default ProjectIdSettingsPage;
