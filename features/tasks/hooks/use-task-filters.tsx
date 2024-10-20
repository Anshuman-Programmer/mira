import { TaskStatus } from "../types";
import { parseAsString, parseAsStringEnum, useQueryStates } from "nuqs";

export const useTaskFilters = () =>
  useQueryStates({
    projectId: parseAsString,
    status: parseAsStringEnum(Object.values(TaskStatus)),
    assigneeId: parseAsString,
    search: parseAsString,
    dueDate: parseAsString,
  });
