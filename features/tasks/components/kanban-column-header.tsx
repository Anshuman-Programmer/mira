import React, { ReactNode } from "react";
import { TaskStatus } from "../types";
import { snackeCateToTitleCase } from "@/lib/utils";
import {
  CircleCheckIcon,
  CircleDashedIcon,
  CircleDotDashedIcon,
  CircleDotIcon,
  CircleIcon,
  // PlusIcon,
} from "lucide-react";

interface KanbanColumnHeaderProps {
  board: TaskStatus;
  taskCount: number;
}

const statusIconMap: Record<TaskStatus, ReactNode> = {
  [TaskStatus.BACKLOG]: (
    <CircleDashedIcon className="size-[18px] text-neutral-400" />
  ),
  [TaskStatus.TODO]: <CircleIcon className="size-[18px] text-neutral-400" />,
  [TaskStatus.IN_PROGRESS]: (
    <CircleDotDashedIcon className="size-[18px] text-blue-400" />
  ),
  [TaskStatus.IN_REVIEW]: (
    <CircleDotIcon className="size-[18px] text-blue-400" />
  ),
  [TaskStatus.DONE]: <CircleCheckIcon className="size-[18px] text-green-400" />,
};

export const KanbanColumnHeader = ({
  board,
  taskCount,
}: KanbanColumnHeaderProps) => {
  const icon = statusIconMap[board];
  return (
    <div className="px-2 py-1.5 flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        {icon}
        <h2 className="text-sm font-medium whitespace-nowrap">
          {snackeCateToTitleCase(board)}
        </h2>
        <div className="size-5 flex items-center justify-center rounded-md bg-neutral-200 text-neutral-700 font-medium">
          {taskCount}
        </div>
      </div>
      {/* <Button
        onClick={() => {}}
        variant={"ghost"}
        size={"icon"}
        className="size-5"
      >
        <PlusIcon className="size-4 text-neutral-500" />
      </Button> */}
    </div>
  );
};
