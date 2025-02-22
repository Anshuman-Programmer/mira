import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
} from "@/components/ui/select";
import { useGetMembers } from "@/features/members/api/use-get-member";
import { useGetProjects } from "@/features/projects/api/use-get-projects";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { SelectValue } from "@radix-ui/react-select";
import { Folder, ListChecksIcon, UserIcon } from "lucide-react";
import { TaskStatus } from "../types";
import { useTaskFilters } from "../hooks/use-task-filters";
import { DatePicker } from "@/components/date-picker";

interface DataFiltersProps {
  hideProjectFilter?: boolean;
}

export const DataFilters = ({ hideProjectFilter }: DataFiltersProps) => {
  const workspaceId = useWorkspaceId();

  const { data: projects, isLoading: isLoadingProjects } = useGetProjects({
    workspaceId,
  });
  const { data: members, isLoading: isLoadingMembers } = useGetMembers({
    workspaceId,
  });

  const isLoading = isLoadingMembers || isLoadingProjects;

  const projectOptions = projects?.documents.map((project) => ({
    id: project.$id,
    label: project.name,
    imageUrl: project.imageUrl,
  }));

  const memberOptions = members?.documents.map((member) => ({
    id: member.$id,
    label: member.name,
  }));

  const [{ status, assigneeId, projectId, dueDate, search }, setFilters] =
    useTaskFilters();

  const onStatusChange = (value: string) => {
    setFilters({
      status: value === "all" ? null : (value as TaskStatus),
    });
  };

  const onAssigneeChange = (value: string) => {
    setFilters({
      assigneeId: value === "all" ? null : value,
    });
  };

  const onProjectChange = (value: string) => {
    setFilters({
      projectId: value === "all" ? null : value,
    });
  };

  if (isLoading) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      <Select
        defaultValue={status ?? undefined}
        onValueChange={(value) => onStatusChange(value)}
      >
        <SelectTrigger className="w-full lg:w-auto h-8">
          <div className="flex items-center pr-2">
            <ListChecksIcon className="size-4 mr-2" />
            <SelectValue placeholder="All statuses" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All statuses</SelectItem>
          <SelectSeparator />
          <SelectItem value={TaskStatus.BACKLOG}>BACKLOG</SelectItem>
          <SelectItem value={TaskStatus.TODO}>TODO</SelectItem>
          <SelectItem value={TaskStatus.IN_PROGRESS}>IN PROGRESS</SelectItem>
          <SelectItem value={TaskStatus.IN_REVIEW}>IN REVFIEW</SelectItem>
          <SelectItem value={TaskStatus.DONE}>DONE</SelectItem>
        </SelectContent>
      </Select>
      <Select
        defaultValue={assigneeId ?? undefined}
        onValueChange={(value) => onAssigneeChange(value)}
      >
        <SelectTrigger className="w-full lg:w-auto h-8">
          <div className="flex items-center pr-2">
            <UserIcon className="size-4 mr-2" />
            <SelectValue placeholder="All users" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All users</SelectItem>
          <SelectSeparator />
          {memberOptions?.map((member) => (
            <SelectItem key={member.id} value={member.id}>
              {member.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        defaultValue={projectId ?? undefined}
        onValueChange={(value) => onProjectChange(value)}
      >
        <SelectTrigger className="w-full lg:w-auto h-8">
          <div className="flex items-center pr-2">
            <Folder className="size-4 mr-2" />
            <SelectValue placeholder="All projects" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All projects</SelectItem>
          <SelectSeparator />
          {projectOptions?.map((project) => (
            <SelectItem key={project.id} value={project.id}>
              {project.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <DatePicker
        placeholder="Due date"
        className="h-8 w-full lg:w-auto"
        value={dueDate ? new Date(dueDate) : undefined}
        onChange={(date) =>
          setFilters({
            dueDate: date ? date.toISOString() : null,
          })
        }
      />
    </div>
  );
};
