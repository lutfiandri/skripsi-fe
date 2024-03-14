"use client";

import { Button } from "@/components/ui/button";
import { submitAuthorize } from "../_actions/authorize";
import { useTransition } from "react";
import { errorToaster } from "@/lib/errorToaster";
import { useSearchParams, useRouter } from "next/navigation";

export default function AuthorizeForm() {
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const router = useRouter();

  const onSubmit = () => {
    startTransition(async () => {
      try {
        const query = new URLSearchParams();
        query.append("client_id", searchParams.get("client_id") as string);
        query.append(
          "redirect_uri",
          searchParams.get("redirect_uri") as string
        );
        query.append("state", searchParams.get("state") as string);
        query.append(
          "response_type",
          searchParams.get("response_type") as string
        );

        const accessToken = localStorage.getItem("access_token") as string;

        const res = await submitAuthorize(query.toString(), accessToken);
        if (!res.success) throw res?.message as string;

        router.replace(res?.data?.redirect_uri as string);
      } catch (error) {
        errorToaster(error);
      }
    });
  };

  return (
    <div>
      <Button onClick={onSubmit} disabled={isPending}>
        Authorize
      </Button>
    </div>
  );
}
