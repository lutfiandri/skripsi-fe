"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { submitForm } from "../_actions/login";
import { useTransition } from "react";
import { FormSchema, formSchema } from "../_models/login";
import { errorToaster } from "@/lib/errorToaster";
import { useSearchParams, useRouter } from "next/navigation";

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = form.handleSubmit((data: FormSchema) => {
    startTransition(async () => {
      try {
        const res = await submitForm(data);
        if (!res.success) throw res?.message as string;

        localStorage.setItem("access_token", res?.data?.access_token as string);
        localStorage.setItem(
          "refresh_token",
          res?.data?.refresh_token as string
        );

        if (searchParams.get("response_type") === "code") {
          router.push(`/authorize?${searchParams}`);
        }
      } catch (error) {
        errorToaster(error);
      }
    });
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending} type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
}
