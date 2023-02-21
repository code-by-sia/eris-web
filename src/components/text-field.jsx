import Input from "./input";

const LabelStyles = {
  default: "block text-sm font-medium text-gray-700 dark:text-neutral-100 mb-1",
};
export default function TextFied({
  label,
  name,
  type = "text",
  value,
  required = false,
  onChange,
  className = "",
  textClassName,
  style = "default",
  size = "default",
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className={LabelStyles[style] || ""}>
        {label}
      </label>
      <Input
        style={style}
        className={textClassName}
        size={size}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
