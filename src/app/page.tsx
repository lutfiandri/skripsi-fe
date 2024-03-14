import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid place-items-center min-h-screen">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl">Lutfi&apos;s SmartHome</h1>
        <div className="flex gap-2">
          <Link className="w-full" href="/login">
            <Button className="w-full">Login</Button>
          </Link>
          <Link className="w-full" href="/register">
            <Button className="w-full">Register</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
