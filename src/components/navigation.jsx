import classNames from "classnames";
import Button from "./button";
import LibraryIcon from "./icons/library";

function NavItem({ isActive, label, className = "", onClick }) {
  return (
    <Button
      style="nav"
      size=""
      className={classNames(
        className,
        "font-semibold",
        isActive ? "text-black" : "text-neutral-600"
      )}
      label={label}
      onClick={onClick}
    />
  );
}

const NAV = ["Dashboard", "Books", "Members"];

export default function Navigation({ value = "Dashboard", onChange }) {
  return (
    <nav className="flex gap-2 items-center">
      <LibraryIcon className="h-6 mx-3" />
      {NAV.map((it) => (
        <NavItem
          label={it}
          key={it}
          isActive={it === value}
          onClick={() => onChange(it)}
        />
      ))}
    </nav>
  );
}
