// "use client";

import { redirect } from "next/navigation";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = ({ searchParams }: PageProps) => {
  const query = searchParams.query;

  if (Array.isArray(query) || !query) {
    return redirect("/");
  }

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex gap-16 lg:px-8 lg:py-24">
      <p>hello</p>
    </div>
  );
};

export default Page;
