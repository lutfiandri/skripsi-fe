import { Button } from "@/components/ui/button";
import { submitAuthorize } from "./_actions/authorize";
import AuthorizeForm from "./_components/authorizeForm";

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function AuthorizePage({ searchParams }: PageProps) {
  console.log("🚀 ~ AuthorizePage ~ searchParams:", searchParams);

  return (
    <div className="grid place-items-center min-h-screen">
      <div className="flex flex-col w-full md:w-[600px] gap-8">
        <h1 className="text-3xl">Authorize Lutfi&apos;s SmartHome to Google</h1>
        <p>Google can .........</p>
        <AuthorizeForm />
      </div>
    </div>
  );
}
