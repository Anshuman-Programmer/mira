"use client";

import { Button } from "@/components/ui/button";
import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";

export default function Home() {
  const { data, isLoading } = useCurrent();
  console.log("data, isLoading", data, isLoading);

  const { mutate } = useLogout();
  return (
    <div className="grid text-blue-600 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Hello world 2<Button onClick={() => mutate()}>Logout</Button>
    </div>
  );
}
