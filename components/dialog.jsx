import classNames from "classnames";

export default function Dialog({ className = "", isOpen, onClose, children }) {
  if (!isOpen) return <></>;
  return (
    <div
      className="z-20 flex items-center justify-center bg-gray-900/10 fixed w-screen h-screen backdrop-blur"
      onClick={() => onClose()}
    >
      <div
        className={classNames(
          "shadow-lg border bg-white rounded-xl p-6",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
