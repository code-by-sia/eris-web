import classNames from "classnames";
import Rating from "./rating";

export default function MemberItem({
  id,
  selected,
  image,
  name,
  email,
  onClick,
}) {
  return (
    <li
      className={classNames(
        "flex gap-2 items-center p-3 cursor-pointer group",
        selected
          ? "bg-blue-600 dark:bg-blue-900 dark:text-neutral-100"
          : "hover:bg-blue-50 dark:hover:bg-gray-900"
      )}
      onClick={onClick}
    >
      <img className="w-8 h-8 rounded-full" src={image} alt={name} />
      <div className="flex-1 min-w-0 ">
        <p
          className={classNames(
            "text-sm font-medium truncate ",
            "dark:hover:text-neutral-400",
            selected
              ? "text-neutral-100"
              : "text-gray-900 dark:text-neutral-700 "
          )}
        >
          {name}
        </p>
        <p
          className={classNames(
            "text-sm  truncate dark:text-gray-400",
            selected ? "text-neutral-200" : "text-gray-500"
          )}
        >
          {email}
        </p>
      </div>
      <Rating />
    </li>
  );
}
