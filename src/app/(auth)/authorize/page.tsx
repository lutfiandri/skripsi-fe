import { Suspense } from "react";
import AuthorizeForm from "./_components/authorizeForm";
import { getOAuthClientByIdPublic } from "./_actions/oauthClient";
import { getOAuthScopeById } from "./_actions/oauthScope";
import { log } from "console";
import { OAuthScopeResponse } from "./_models/oauthScope";

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function AuthorizePage({ searchParams }: PageProps) {
  console.log("🚀 ~ AuthorizePage ~ searchParams:", searchParams);

  const clientId = searchParams["client_id"] as string;
  const client = await getOAuthClientByIdPublic(clientId);
  console.log(client);

  const clientScopePromises = client.data?.scope_ids.map((scopeId) =>
    getOAuthScopeById(scopeId)
  ) as unknown as Array<OAuthScopeResponse>;

  console.log(clientScopePromises);
  const scopes = await Promise.all(clientScopePromises);

  return (
    <div className="grid place-items-center min-h-screen">
      <div className="flex flex-col w-full md:w-[600px] gap-8">
        <h1 className="text-3xl">
          Authorize Lutfi&apos;s SmartHome to {client.data?.name}
        </h1>
        <div className="flex flex-col gap-2">
          <p>{client.data?.name} can:</p>
          <ul className="list-disc ml-6">
            {scopes.map((scope) => (
              <li key={scope.data?.id} className="mb-1">
                {scope.data?.description}
              </li>
            ))}
          </ul>
        </div>
        <Suspense>
          <AuthorizeForm />
        </Suspense>
      </div>
    </div>
  );
}
