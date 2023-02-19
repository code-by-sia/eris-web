import { useState } from "react";
import MemberItem from "./member-item";
import SearchInput from "./search-input";

export default function MemberList({ selected, onChange, members }) {
  const [query, onQueryChange] = useState("");

  return (
    <div className="my-6 flex flex-col gap-2">
      <SearchInput
        placeholder="Search and pick"
        className="w-1/6 w-full"
        value={query}
        onChange={onQueryChange}
      />
      <ul className=" overflow-hidden divide-y divide-gray-200 dark:divide-gray-700 bg-neutral-100 border rounded">
        {members?.map((it) => (
          <MemberItem
            key={it.name}
            id={it.id}
            selected={selected === it.id}
            name={it.name}
            email={it.email}
            image={it.image}
            onClick={() => onChange(it.id)}
          />
        ))}
      </ul>
    </div>
  );
}
