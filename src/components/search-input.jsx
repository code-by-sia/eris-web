import classNames from "classnames";
import Magnifier from "./icons/magnifier";

export default function SearchInput({
  className,
  textClassName = "rounded-full pl-4 pr-8 ",
  iconClassName = "right-3 text-neutral-300",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className={classNames(className, "flex items-center relative")}>
      <Magnifier className={classNames("absolute h-5 ", iconClassName)} />
      <input
        type="text"
        placeholder={placeholder}
        className={classNames(
          textClassName,
          "w-full border p-1 bg-neutral-100 ",
          "dark:border-0 dark:bg-neutral-700"
        )}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
}
