"use client";
import React from "react";
import { ResponsiveModel } from "@/components/responsive-modal";
import { useEditTaskModel } from "../hooks/use-edit-task-model";
import { EditTaskFormWrapper } from "./edit-task-form-wrapper";

export const EditTaskModel = () => {
  const { taskId, close } = useEditTaskModel();
  return (
    <ResponsiveModel open={!!taskId} onOpenChange={close}>
      {taskId && <EditTaskFormWrapper onCancel={close} id={taskId} />}
    </ResponsiveModel>
  );
};
