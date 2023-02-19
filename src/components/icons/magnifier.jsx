import classNames from "classnames";

export default function Maginfier({
  stroke = "currentColor",
  strokeWidth = "1.5",
  className = "w-6 h-6",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke={stroke}
      className={classNames("h-6", className)}
      strokeWidth={strokeWidth}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}
