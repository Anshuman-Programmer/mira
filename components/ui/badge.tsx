import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { TaskStatus } from "@/features/tasks/types";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        [TaskStatus.BACKLOG]:
          "border-transparent bg-neutral-200 text-primary hover:bg-neutral-200/80",
        [TaskStatus.TODO]:
          "border-transparent bg-neutral-200 text-primary hover:bg-neutral-200/80",
        [TaskStatus.IN_PROGRESS]:
          "border-transparent bg-blue-200 text-blue-700 hover:bg-blue-200/80",
        [TaskStatus.IN_REVFIEW]:
          "border-transparent bg-blue-200 text-blue-700 hover:bg-blue-200/80",
        [TaskStatus.DONE]:
          "border-transparent bg-green-200 text-green-700 hover:bg-green-200/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
