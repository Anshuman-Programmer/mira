import { ResponsiveModel } from "@/components/responsive-modal";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export const useConfirm = (
  title: string,
  message: string,
  varient: ButtonProps["variant"] = "primary"
): [() => JSX.Element, () => Promise<unknown>] => {
  const [promise, setPromise] = useState<{
    resolve: (value: boolean) => void;
  } | null>(null);

  const confirm = () =>
    new Promise((resolve) => {
      setPromise({ resolve });
    });

  const handleClose = () => {
    setPromise(null);
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCencel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const ConfirmationDailog = () => (
    <ResponsiveModel open={promise !== null} onOpenChange={handleClose}>
      <Card className="w-fuull h-full border-none shadow-none">
        <CardContent className="pt-8">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{message}</CardDescription>
          <div className="pt-4 w-full flex flex-col gap-y-2 lg:flex-row gap-x-2 items-center justify-end">
            <Button
              onClick={handleCencel}
              variant={"outline"}
              className="w-full lg:w-auto "
            >
              Cencel
            </Button>
            <Button
              onClick={handleConfirm}
              variant={varient}
              className="w-full lg:w-auto "
            >
              Confirm
            </Button>
          </div>
        </CardContent>
      </Card>
    </ResponsiveModel>
  );

  return [ConfirmationDailog, confirm];
};
