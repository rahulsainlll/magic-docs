"use client"
import { redirect } from "next/navigation";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
};


const Page = ({searchParams}: PageProps) => {
  const query = searchParams.query

  if(Array.isArray(query) || !query){
    return redirect('/')
  }
  
  return (
    <p>hello</p>
  
  );
}

export default Page;