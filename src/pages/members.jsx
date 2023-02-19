import Page from "../components/page";
import PageHeader from "../components/page-header";
import useDebounce from "../hooks/debounce";
import { useState } from "react";
import Details from "../components/detail-side";
import Fade from "../components/fade";
import LendDialog from "../components/lend-dialog";
import PageViewer from "../components/page-viewer";
import ReturnDialog from "../components/return-dialog";
import Members from "../components/members";

export default function MembersPage() {
  const [page, setPage] = useState("Dashboard");
  const [book, selectBook] = useState(null);

  const [q, setQuery] = useState("");
  const [dialog, setDialog] = useState("");
  const searchTerm = useDebounce(q, 200);

  return (
    <Page className="flex">
      <div className="flex-1 flex flex-col">
        <PageHeader
          nav={page}
          setNav={setPage}
          query={q}
          onQueryChange={setQuery}
        />
        <section className="flex flex-col flex-1 overflow-auto">
          <Members />
        </section>
      </div>
    </Page>
  );
}
