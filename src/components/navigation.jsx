import classNames from "classnames";
import { useLocation } from "react-router-dom";
import Button from "./button";

function NavItem({ isActive, label, path, className = "", onClick }) {
  return (
    <a href={path}>
      <Button
        style="nav"
        size=""
        className={classNames(
          className,
          "p-1 px-3 rounded-lg font-bold",
          isActive
            ? "text-black text-white border bg-neutral-700 dark:bg-gray-700 dark:text-neutral-100 dark:border-0"
            : " dark:text-neutral-100 dark:hover:bg-gray-600"
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
    <nav className="flex gap-2 items-center justify-center">
      {Object.keys(NAV).map((it) => (
        <NavItem
          label={it}
          key={it}
          isActive={NAV[it] === location?.pathname}
          path={NAV[it]}
        />
      ))}
    </nav>
  );
}
