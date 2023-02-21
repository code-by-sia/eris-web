import { useLocation } from "react-router-dom";
import Navigation from "./navigation";
import SearchInput from "./search-input";
import User from "./user";

const placeHodlers = {
  "/books": "Author, ISBN, or Book name",
  "/members": "Member Id or name",
  "/": "Member/Book id or name",
};

export default function PageHeader({ query, onQueryChange }) {
  const location = useLocation();
  const nav = location?.pathname;
  return (
    <header className="dark:bg-black flex items-center px-3 py-2 gap-2 border-b dark:border-b-black shadow-xl">
      <Navigation />
      <SearchInput
        placeholder={placeHodlers[nav]}
        className="w-1/4 mx-auto min-w-[20em]"
        textClassName="text-center rounded-lg pr-8"
        iconClassName="right-1 text-neutral-300"
        value={query}
        onChange={onQueryChange}
      />
      <User />
    </header>
  );
}
