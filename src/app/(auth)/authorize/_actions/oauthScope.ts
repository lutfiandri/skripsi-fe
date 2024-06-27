"use server";

import { env } from "process";
import { OAuthScopeResponse } from "../_models/oauthScope";

export const getOAuthScopeById = async (
  scopeId: string
): Promise<OAuthScopeResponse> => {
  const endpoint = `${env.BACKEND_BASEURL}/oauth2/scopes/${scopeId}/public`;

  const res = await fetch(endpoint, {
    method: "GET",
  });

  const data: OAuthScopeResponse = await res.json();
  console.log("🚀 ~ data:", data);

  return data;
};
