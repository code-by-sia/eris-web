import Page from "../components/page";
import PageHeader from "../components/page-header";
import Books from "../components/books";
import Details from "../components/detail-side";
import Fade from "../components/fade";
import { useState, useEffect } from "react";
import LendDialog from "../components/lend-dialog";
import ReturnDialog from "../components/return-dialog";

const url = "https://www.googleapis.com/books/v1/volumes";

export default function HomePage() {
  const [page, setPage] = useState("Books");
  const [book, selectBook] = useState(null);
  const [books, setBooks] = useState({});
  const [q, setQuery] = useState("Italian food");
  const [dialog, setDialog] = useState("");

  useEffect(() => {
    fetch(
      `${url}?${new URLSearchParams({
        orderBy: "relevance",
        printType: "BOOKS",
        q: q.trim() == "" ? "Travel & Food" : q,
        maxResults: 40,
      })}`
    )
      .then((it) => it.json())
      .then(setBooks);
  }, [q]);

  return (
    <Page className="flex">
      <ReturnDialog isOpen={dialog === "return"} onClose={setDialog} />
      <LendDialog isOpen={dialog === "lend"} onClose={setDialog} />
      <div className="flex-1 flex flex-col">
        <PageHeader
          nav={page}
          setNav={setPage}
          query={q}
          onQueryChange={setQuery}
        />
        <section className="flex flex-col overflow-auto  px-12">
          <Fade style="header" gradient="py-6 from-white to-transparent" />

          <Books value={books} onSelect={selectBook} />
        </section>
        <Fade gradient="from-transparent to-white" />
      </div>
      {book != null && <Details onAction={setDialog} {...book} />}
    </Page>
  );
}
