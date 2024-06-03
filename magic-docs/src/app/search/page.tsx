import { db } from "@/db";
import { docsTable } from "@/db/schema";
import { sql } from "drizzle-orm";
import { redirect } from "next/navigation";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const query = searchParams.query;

  if (Array.isArray(query) || !query) {
    return redirect("/");
  }

  let docs = await db
    .select()
    .from(docsTable)
    .where(
      sql`to_tsvector('simple', lower(${docsTable.title} || ' ' || ${
        docsTable.description
      })) @@ to_tsquery('simple', lower(${query
        .trim()
        .split(" ")
        .join(" & ")}))`
    )
    .limit(3);

  return (
    <div className="relative min-h-screen isolate overflow-hidden border-b border-gray-200 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex gap-16 lg:px-8 lg:py-24">
        <pre className="whitespace-pre-wrap break-words" >{JSON.stringify(docs)}</pre>
      </div>
    </div>
  );
};

export default Page;
