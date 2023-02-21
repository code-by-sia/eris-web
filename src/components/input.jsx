import classNames from "classnames";

const STYLES = {
  default:
    "border focus:ring-cyan-500 focus:border-cyan-500 block shadow-sm border-gray-300 rounded-md dark:border-0 dark:bg-gray-900",
  search: "border rounded-full px-6 dark:border-0",
};

const SIZES = {
  default: "w-full",
};

export default function Input({
  id,
  type,
  required = false,
  style,
  className = "p-3",
  size,
  value,
  onChange,
  ...rest
}) {
  if (type === "textarea") {
    return (
      <textarea
        id={id}
        class={classNames(className, STYLES[style] || "", SIZES[size] || "")}
        required={required}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        {...rest}
      ></textarea>
    );
  }
  return (
    <input
      id={id}
      type={type}
      class={classNames(className, STYLES[style] || "", SIZES[size] || "")}
      required={required}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      {...rest}
    />
  );
}
