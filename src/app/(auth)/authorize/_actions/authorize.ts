"use server";

import { env } from "process";
import { AuthorizeResponse } from "../_models/authorize";

export const submitAuthorize = async (
  queryParams: string,
  accessToken: string
): Promise<AuthorizeResponse> => {
  console.log("🚀 ~ accessToken:", accessToken);
  console.log("🚀 ~ queryParams:", queryParams);
  const endpoint = `${env.BACKEND_BASEURL}/oauth2/auth/authorize?${queryParams}`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data: AuthorizeResponse = await res.json();
  console.log("🚀 ~ data:", data);

  return data;
};
