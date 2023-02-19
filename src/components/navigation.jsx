import classNames from "classnames";
import { useLocation } from "react-router-dom";
import Button from "./button";
import LibraryIcon from "./icons/library";

function NavItem({ isActive, label, path, className = "", onClick }) {
  return (
    <a href={path}>
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
    </a>
  );
}

const NAV = { Dashboard: "/", Books: "/books", Members: "/members" };

export default function Navigation() {
  const location = useLocation();
  return (
    <nav className="flex gap-2 items-center">
      <LibraryIcon className="h-6 mx-3" />
      {Object.keys(NAV).map((it) => (
        <NavItem
          label={it}
          key={it}
          isActive={it === location?.pathname}
          path={NAV[it]}
        />
      ))}
    </nav>
  );
}
