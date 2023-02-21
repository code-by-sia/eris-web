import classNames from "classnames";
import Dynamic from "./dynamic";

const Styles = {
  default:
    "inline-flex border border-transparent rounded-md text-white bg-indigo-600 dark:bg-indigo-700 hover:bg-indigo-800 items-center disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 justify-center",
  action:
    "inline-flex border border-transparent rounded-md text-white bg-teal-600 dark:bg-teal-700 hover:bg-teal-900 items-center disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 justify-center",
  link: "italic hover:underline",
  icon: "hover:opacity-80",
  nav: "text-center",
};

const Sizes = {
  default: "p-3 w-full ",
  small: "p-3 text-sm",
  medium: "p-2 text-md",
  action: "px-2 py-1 flex gap-2 items-center",
  tiny: "p-1",
};

export default function Button({
  className = "",
  label,
  style = "default",
  size = "default",
  onClick,
  children,
  disabled = false,
  icon = "",
}) {
  return (
    <button
      type="button"
      className={classNames(className, Styles[style] || "", Sizes[size] || "")}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
      {children}
      <Dynamic component={icon} />
    </button>
  );
}
