import classNames from "classnames";
import Magnifier from "./icons/magnifier";

export default function SearchInput({
  className,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className={classNames(className, "flex items-center relative")}>
      <Magnifier className="absolute h-5 right-3 text-neutral-300" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border p-1 pl-4 pr-8 bg-neutral-100 rounded-full"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
}
