"use client";
import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusIcon } from "lucide-react";
import React from "react";
import { useCreateTaskModel } from "../hooks/use-create-task-model";

function TaskViewSwitcher() {
  const { open } = useCreateTaskModel();

  return (
    <Tabs className="flex-1 w-full border rounded-lg ">
      <div className="h-full flex flex-col overflow-auto p-4">
        <div className="flex flex-col gap-y-2 lg:flex-row justify-between items-center">
          <TabsList className="w-full lg:w-auto">
            <TabsTrigger className="h-8 w-full lg:w-auto" value="table">
              Table
            </TabsTrigger>
            <TabsTrigger className="h-8 w-full lg:w-auto" value="hanban">
              Kanban
            </TabsTrigger>
            <TabsTrigger className="h-8 w-full lg:w-auto" value="calendar">
              Calendar
            </TabsTrigger>
          </TabsList>
          <Button onClick={open} size={"sm"} className="w-full lg:w-auto">
            <PlusIcon className="size-4 mr-2" />
            New
          </Button>
        </div>
        <DottedSeparator className="my-4" />
        data filters
        <DottedSeparator className="my-4" />
        <>
          <TabsContent value="table" className="mt-0">
            data Table
          </TabsContent>
          <TabsContent value="hanban" className="mt-0">
            Kanban
          </TabsContent>
          <TabsContent value="calendar" className="mt-0">
            Calendar
          </TabsContent>
        </>
      </div>
    </Tabs>
  );
}

export default TaskViewSwitcher;
