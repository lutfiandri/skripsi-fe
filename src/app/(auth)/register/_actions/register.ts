"use server";

import env from "@/lib/env";
import { FormSchema, RegisterResponse } from "../_models/register";

export const submitForm = async (
  values: FormSchema
): Promise<RegisterResponse> => {
  const endpoint = `${env.BACKEND_BASEURL}/auth/register`;

  const res = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: RegisterResponse = await res.json();

  return data;
};
