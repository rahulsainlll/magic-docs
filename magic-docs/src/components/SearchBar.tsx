"use client"

import { Loader2, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";


const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearching , startTransition] = useTransition()
  const router  = useRouter()
  const [query , setQuery] = useState<string>('')
  const search = () =>{
    startTransition(() => {
   router.push(`/search?query=${query}`)
    }
  )
  }


  return (
    <div className="relative w-full h-14 flex flex-col bg-white">
      <div className="relative h-14 z-10 rounded-md">
       <Input 
       value = {query}
       onChange={(e) => setQuery(e.target.value)}
       onKeyDown={(e) => {

        if(e.key ==="Enter"){
          search()
        }
        if(e.key ==="Escape"){
          inputRef?.current?.blur();
        }
       }} ref ={inputRef} className="absolute h-full inset-0"/>
       <Button onClick={search}/>
      </div>
    </div>
  );
};

export default SearchBar;
