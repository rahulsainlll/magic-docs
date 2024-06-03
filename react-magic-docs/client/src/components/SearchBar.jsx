import { useState, useRef, useTransition } from "react";

import { Loader2, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// const useQuery = () => {
//   return new URLSearchParams(useLocation().search);
// };

const SearchBar = () => {
  // const history = useHistory();
  // const searchQuery = useQuery();
  // const defaultQuery = searchQuery.get("query") || "";
  // const inputRef = useRef(null);
  const [isSearching, startTransition] = useTransition();
  // const [query, setQuery] = useState(defaultQuery);

  // const search = () => {
  //   startTransition(() => {
  //     history.push(`/search?query=${query}`);
  //   });
  // };

  return (
    <div className="relative w-full h-14 flex flex-col bg-white">
      <div className="relative h-14 z-10 rounded-md">
        <Input
          // disabled={isSearching}
          // value={query}
          // onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              search();
            }
            if (e.key === "Escape") {
              inputRef.current?.blur();
            }
          }}
          // ref={inputRef}
          className="absolute inset-0 h-full"
        />
        <Button
          // disabled={isSearching}
          size="sm"
          // onClick={search}
          className="absolute right-0 inset-y-0 h-full rounded-l-none"
        >
          {isSearching ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            <Search className="h-6 w-6" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
