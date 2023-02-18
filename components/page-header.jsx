import Navigation from "./navigation";
import SearchInput from "./search-input";

const placeHodlers = {
  Books: "Author, ISBN, or Book name",
  Members: "Member Id or name",
  Dashboard: "Member/Book id or name",
};

export default function PageHeader({ nav, setNav, query, onQueryChange }) {
  return (
    <header className="flex justify-between py-5 px-12">
      <Navigation value={nav} onChange={setNav} />
      <SearchInput
        placeholder={placeHodlers[nav]}
        className="w-1/6 min-w-[20em]"
        value={query}
        onChange={onQueryChange}
      />
    </header>
  );
}
