"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

interface ProductErrorPageProps {
  error: {
    message: string;
  };
}

const ProductErrorPage = ({ error }: ProductErrorPageProps) => {
  return (
    <div className="h-screen w-full flex items-center justify-center gap-2 flex-col">
      <AlertTriangle className="size-10 text-amber-700" />
      <p className="text-sm text-neutral-600">{error.message}</p>
      <Button variant={"secondary"} size={"sm"}>
        <Link href={"/"}>back to home</Link>
      </Button>
    </div>
  );
};

export default ProductErrorPage;
