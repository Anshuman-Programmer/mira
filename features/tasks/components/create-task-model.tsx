"use client";
import React from "react";
import { useCreateTaskModel } from "../hooks/use-create-task-model";
import { ResponsiveModel } from "@/components/responsive-modal";
import { CreateTaskFormWrapper } from "./create-task-form-wrapper";

export const CreateTaskModel = () => {
  const { isOpen, setIsOpen, close } = useCreateTaskModel();
  return (
    <ResponsiveModel open={isOpen} onOpenChange={setIsOpen}>
      <CreateTaskFormWrapper onCancel={close} />
    </ResponsiveModel>
  );
};
