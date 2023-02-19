import Books from "./books";
import Dynamic from "./dynamic";
import Members from "./members";
import Dashboard from "./dashboard";

export default function PageViewer({ page, ...rest }) {
  const compoent = { Dashboard, Books, Members }[page];
  return <Dynamic component={compoent} {...rest} />;
}
