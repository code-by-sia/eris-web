import { useLocation } from "react-router-dom";
import Navigation from "./navigation";
import SearchInput from "./search-input";

const placeHodlers = {
  "/books": "Author, ISBN, or Book name",
  "/members": "Member Id or name",
  "/": "Member/Book id or name",
};

export default function PageHeader({ query, onQueryChange }) {
  const location = useLocation();
  const nav = location?.pathname;
  return (
    <header className="flex justify-between py-5 px-3">
      <Navigation />
      <SearchInput
        placeholder={placeHodlers[nav]}
        className="w-1/6 min-w-[20em]"
        value={query}
        onChange={onQueryChange}
      />
    </header>
  );
}
