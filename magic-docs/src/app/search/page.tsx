import { db } from "@/db";
import { docsTable } from "@/db/schema";
import { sql } from "drizzle-orm";
import { X } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
// import BackButton from "@/components/backButton";

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
    .limit(2);

  if (docs.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center bg-white ">
          <X className="mx-auto h-8 w-8 text-gray-400" />
          <h3 className="mt-2 text-sm font-semibold text-gray-900">
            No results
          </h3>
          <p className="mt-1 text-sm mx-auto max-w-prose text-gray-500">
            Sorry, we couldn't find any matches for{" "}
            <span className="text-green-600 font-medium">{query}</span>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" max-w-lg lg:max-w-3xl mx-auto ">
      <ul className="py-4 divide-y divide-zinc-100 bg-white shadow-md hover:shadow-xl rounded-b-md h-full border rounded-md ">
        {/* <BackButton/> */}
        {docs.slice(0, 3).map((doc) => (
          <Link key={doc.id} href={`/docs/${doc.id}`}>
            <li className="mx-auto py-4 px-8 flex space-x-4">
              <div className="relative flex items-center bg-zinc-100 rounded-lg h-40 w-40"></div>

              <div className="w-full flex-1 space-y-2 py-1">
                <h1 className="lg:text-lg text-base font-mono text-gray-900 max-w-prose">
                  {doc.title}
                </h1>

                <p className="text-gray-500 text-sm lg:text-base line-clamp-3 max-w-prose">
                  {doc.description}
                </p>
                <p className="text-sm lg:text-base text-gray-500 line-clamp-2 max-w-prose">
                  {doc.content}
                </p>
                <p className="text-sm lg:text-base  text-gray-900 mt-7 max-w-prose">
                  Written by: {doc.author}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Page;
