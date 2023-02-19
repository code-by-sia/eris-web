import classNames from "classnames";
import Button from "./button";

function NavItem({ isActive, label, className = "", onClick }) {
  return (
    <Button
      style="nav"
      size=""
      className={classNames(
        className,
        "uppercase",
        isActive ? "font-bold" : ""
      )}
      label={label}
      onClick={onClick}
    />
  );
}

const NAV = ["Dashboard", "Books", "Members"];

export default function Navigation({ value = "Dashboard", onChange }) {
  return (
    <nav className="flex gap-2">
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
