import { Loader } from "lucide-react";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-y-4 items-center justify-center">
      <Loader className="size-6 animate-spin" />
      <p className="text-sm text-neutral-700">Loading</p>
    </div>
  );
};

export default LoadingPage;
