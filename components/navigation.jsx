import classNames from "classnames";
import Button from "./button";

function NavItem({ isActive, label, className = "", onClick }) {
  return (
    <Button
      style="nav"
      className={classNames(
        className,
        isActive ? "font-bold border-b-4 border-gray-800" : "border-b"
      )}
      label={label}
      onClick={onClick}
    />
  );
}

const NAV = ["Dashboard", "Books", "Members"];

export default function Navigation({ value = "Dashboard", onChange }) {
  return (
    <nav className="flex">
      {NAV.map((it) => (
        <NavItem
          label={it}
          key={it}
          isActive={it === value}
          onClick={() => onChange(it)}
        />
      ))}
      <span className="block border-b w-32" />
    </nav>
  );
}
