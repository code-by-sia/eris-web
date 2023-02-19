import Page from "../components/page";
import PageHeader from "../components/page-header";

import { useState } from "react";
import Details from "../components/detail-side";
import Fade from "../components/fade";
import LendDialog from "../components/lend-dialog";
import PageViewer from "../components/page-viewer";
import ReturnDialog from "../components/return-dialog";

export default function HomePage() {
  const [page, setPage] = useState("Dashboard");
  const [book, selectBook] = useState(null);

  const [q, setQuery] = useState("Italian food");
  const [dialog, setDialog] = useState("");

  return (
    <Page className="flex">
      {page === "Books" && (
        <>
          <ReturnDialog isOpen={dialog === "return"} onClose={setDialog} />
          <LendDialog isOpen={dialog === "lend"} onClose={setDialog} />
        </>
      )}
      <div className="flex-1 flex flex-col">
        <PageHeader
          nav={page}
          setNav={setPage}
          query={q}
          onQueryChange={setQuery}
        />
        <section className="flex flex-col flex-1 overflow-auto  px-12">
          <PageViewer page={page} q={q} onSelectBook={selectBook} />
        </section>
        {page === "Books" && <Fade gradient="from-transparent to-white" />}
      </div>
      {book != null && <Details onAction={setDialog} {...book} />}
    </Page>
  );
}
