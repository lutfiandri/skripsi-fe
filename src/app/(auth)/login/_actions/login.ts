'use server';

import env from '@/lib/env';
import { FormSchema, LoginResponse } from '../_models/login';

export const submitForm = async (
  values: FormSchema
): Promise<LoginResponse> => {
  console.log('🚀 ~ submitForm ~ values:', values);
  const endpoint = `${process.env.BACKEND_BASEURL}/auth/login`;

  console.log('🚀 ~ submitForm ~ endpoint:', endpoint);
  const res = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data: LoginResponse = await res.json();
  console.log(data);

  return data;
};
