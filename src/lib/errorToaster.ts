import { toast } from "@/components/ui/use-toast";

export const errorToaster = (error: unknown) => {
  let message = "";
  if (typeof error === "string") {
    message = error;
  } else if (error instanceof Error) {
    message = error.message;
  }

  toast({
    title: "Error",
    description: message,
    variant: "destructive",
  });
};
