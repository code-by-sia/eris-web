import classNames from "classnames";
import { useState } from "react";
import Rating from "./rating";
import SearchInput from "./search-input";

function MemberItem({ id, selected, image, name, email, onClick }) {
  return (
    <li
      className={classNames(
        "flex gap-2 items-center p-3 cursor-pointer",
        selected ? "bg-blue-600 text-white" : "hover:bg-blue-50"
      )}
      onClick={onClick}
    >
      <img className="w-8 h-8 rounded-full" src={image} alt={name} />
      <div className="flex-1 min-w-0">
        <p
          className={classNames(
            "text-sm font-medium truncate dark:text-white",
            selected ? "text-neutral-100" : "text-gray-900 "
          )}
        >
          {name}
        </p>
        <p
          className={classNames(
            "text-sm  truncate dark:text-gray-400",
            selected ? "text-neutral-200" : "text-gray-500"
          )}
        >
          {email}
        </p>
      </div>
      <Rating />
    </li>
  );
}

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
