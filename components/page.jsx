import classNames from "classnames";

export default function Page({ className = "", children }) {
  return (
    <div className={classNames(className, "flex w-full h-screen")}>
      {children}
    </div>
  );
}
