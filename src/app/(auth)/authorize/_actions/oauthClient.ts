"use server";

import { env } from "process";
import { OAuthClientResponse } from "../_models/oauthClient";

export const getOAuthClientByIdPublic = async (
  clientId: string
): Promise<OAuthClientResponse> => {
  const endpoint = `${env.BACKEND_BASEURL}/oauth2/clients/${clientId}/public`;

  const res = await fetch(endpoint, {
    method: "GET",
  });

  const data: OAuthClientResponse = await res.json();
  console.log("🚀 ~ data:", data);

  return data;
};
