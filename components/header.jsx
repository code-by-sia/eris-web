import classNames from "classnames";

export default function Header({ className = "", children }) {
  return (
    <h1 className={classNames("text-xl flex flex-col gap-2", className)}>
      {children}
    </h1>
  );
}
