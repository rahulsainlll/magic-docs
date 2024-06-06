import { db } from "@/db";
// import { docs, docsTable } from '@/db/schema'
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
// import BackButton from '@/components/BackButton'
import Image from "next/image";
import { Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { docsTable } from "@/db/schema";
import BackButton from "@/components/backButton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Footer from "@/pages/footer";

interface PageProps {
  params: {
    docId: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { docId } = params;

  if (!docId) return notFound();

  const [docs] = await db
    .select()
    .from(docsTable)
    .where(eq(docsTable.id, docId));

  if (!docs) return notFound();

  return (
    <div>
      <div className="py-8 pb-8 px-12 divide-y">
        <div className="max-w-lg lg:max-w-3xl mx-auto">
          <BackButton />
          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {}
            </h1>
          </div>
          <div className="aspect-auto my-6 border border-border w-full h-52">
            <div className="relative bg-zinc-100 w-full h-full overflow-hidden rounded-xl"></div>
          </div>
          <div className="mt-4">
          <div className="flex items-center">
  <p className="font-medium text-3xl text-gray-900">
    {docs.title.replace(/"/g, '')}
  </p>
</div>
{/* <div className="mt-4 space-y-6">
            <p className="text-2xl max-w-prose text-muted-foreground">
              {docs.description}
            </p>
          </div> */}

 

           

            <div className="mt-4 space-y-6">
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {docs.content}
                </ReactMarkdown>
              </div>
            </div>

            <div className="mt-6 flex items-center">
              <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
              <p className="ml-2 text-sm text-muted-foreground">
                Verified by MagicDocs
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
