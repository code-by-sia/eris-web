import classNames from "classnames";

const styles = {
  footer: "absolute bg-gradient-to-b bottom-0 left-0 right-0",
  header: "sticky top-0 bg-gradient-to-b flex w-full",
};

export default function Fade({
  height = "h-20",
  style = "footer",
  gradient = "from-transparent to-gray-900",
}) {
  return <span className={classNames(styles[style], height, gradient)} />;
}
