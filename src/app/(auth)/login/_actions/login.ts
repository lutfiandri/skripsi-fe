"use server";

import env from "@/lib/env";
import { FormSchema, LoginResponse } from "../_models/login";

export const submitForm = async (
  values: FormSchema
): Promise<LoginResponse> => {
  const endpoint = `${env.BACKEND_BASEURL}/auth/login`;

  const res = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: LoginResponse = await res.json();

  return data;
};
