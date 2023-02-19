export default function Dynamic({ component, condition = true, ...props }) {
  const Component = component;
  if (!condition) return <></>;
  if (typeof component === "function") {
    return <Component {...props} />;
  } else return component;
}
