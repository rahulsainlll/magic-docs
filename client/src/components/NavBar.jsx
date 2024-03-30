import React from "react";
import SearchBar from "./SearchBar";
import { Icons } from "./Icons";
import { Button } from "../components/ui/button";

export default function NavBar() {
  return (
    <div className="flex  p-1 justify-between w-full">
      <div className="flex gap-2">
        <Icons.Sparkles className="h-6 w-6 sm:h-8 sm:w-8" />
        <h1 className="tracking-tight text-xl sm:text-2xl font-semibold">
          MagicDocs
        </h1>
      </div>

      <div className="flex gap-5 items-center">
        <Button variant="outline">Github</Button>
      </div>
    </div>
  );
}
