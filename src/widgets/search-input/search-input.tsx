import { SearchInputProps } from "./search-input.model";
import { Search } from "lucide-react";

export const SearchInput: React.FC<SearchInputProps> = (props) => {
  const { search: searchValue, setSearch } = props;
  return (
    <div className="relative">
      <input
        className="h-[48px] min-w-[300px] md:min-w-[350px] md:h-[52px] xl:min-w-[370px] xl:h-[54px] ps-11 pe-5 rounded-xl mb-5 "
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <Search className="absolute top-3 md:top-[15px] left-3" />
    </div>
  );
};
