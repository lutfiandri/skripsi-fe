import { Separator } from "@/components/ui/separator";
import LoginForm from "./_components/loginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="flex flex-col w-full md:w-[600px] gap-8">
        <h1 className="text-3xl">Login to Lutfi&apos;s SmartHome</h1>
        <LoginForm />
        <Separator className="-mb-4" />
        <div className="text-sm">
          Don&apos; have an account yet?{" "}
          <Link href="/register" className="text-blue-500 hover:text-blue-700">
            register here &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
