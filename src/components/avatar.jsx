import classNames from "classnames";

export default function Avatar({ className = "w-8 h-8" }) {
  return (
    <img
      src="/me.jpeg"
      className={classNames("rounded-full shadow-sm object-cover", className)}
    />
  );
}
