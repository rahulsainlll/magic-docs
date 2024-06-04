import { db } from "@/db";
import { docsTable } from "@/db/schema";
import { sql } from "drizzle-orm";
import { X } from "lucide-react";
import Link from "next/link";
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
    .limit(1);

   if(docs.length===0){ return <div className='text-center py-8 mt-11 bg-white shadow-md rounded-b-md'>
   <X  className='mx-auto h-8 w-8 text-gray-400' />
   <h3 className='mt-2 text-sm font-semibold text-gray-900'>No results</h3>
   <p className='mt-1 text-sm mx-auto max-w-prose text-gray-500'>
     Sorry, we couldn't find any matches for{' '}
     <span className='text-green-600 font-medium'>{query}</span>.
   </p>
 </div>}

  return (
    <ul className='py-4 divide-y divide-zinc-100 bg-white shadow-md rounded-b-md'>
    {docs.slice(0, 3).map((doc) => (
      <Link key={doc.id} href={`/docs/${doc.id}`}>
        <li className='mx-auto py-4 px-8 flex space-x-4'>
          <div className='relative flex items-center bg-zinc-100 rounded-lg h-40 w-40'>
        
          </div>

          <div className='w-full flex-1 space-y-2 py-1'>
            <h1 className='text-lg font-medium text-gray-900'>
              {doc.title}
            </h1>

            <p className='prose prose-sm text-gray-500 line-clamp-3'>
              {doc.description}
              </p>
              <p className='prose prose-sm text-gray-500 line-clamp-2'>
              {doc.content}
              </p>
              <p
               className='text-base  font-bold text-gray-900 mt-7'>
                {doc.author}
              </p>

            
            
          </div>
        </li>
      </Link>
    ))}
  </ul>
)
}


export default Page;
