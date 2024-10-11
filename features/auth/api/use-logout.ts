import { client } from "@/lib/rpc";
import { useMutation } from "@tanstack/react-query";
import { InferResponseType } from "hono";

type ResponseType = InferResponseType<(typeof client.api.auth.login)["$post"]>;

export const useLogout = () => {
  const mutatuion = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.api.auth.logout["$post"]();
      return await response.json();
    },
  });

  return mutatuion;
};
