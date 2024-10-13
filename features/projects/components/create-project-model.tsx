"use client";
import { ResponsiveModel } from "@/components/responsive-modal";
import React from "react";
import { useCreateProjectModel } from "../hooks/use-create-project-model";
import { CreateProjectForm } from "./create-project-form";

export const CreateProjectModel = () => {
  const { isOpen, setIsOpen, close } = useCreateProjectModel();
  return (
    <ResponsiveModel open={isOpen} onOpenChange={setIsOpen}>
      <CreateProjectForm onCancel={close} />
    </ResponsiveModel>
  );
};
