import { Loader2, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";


const SearchBar = () => {
  return (
    <div className="relative w-full h-14 flex flex-col bg-white">
      <div className="relative h-14 z-10 rounded-md">
       <Input className="absolute h-full inset-0"/>
       <Button/>
      </div>
    </div>
  );
};

export default SearchBar;
