export default function Dynamic({ component, ...props }) {
  const Component = component;

  if (typeof component === "function") {
    return <Component {...props} />;
  } else return component;
}
