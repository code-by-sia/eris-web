import Page from "../components/page";
import PageHeader from "../components/page-header";
import useDebounce from "../hooks/debounce";
import { useState } from "react";
import Details from "../components/detail-side";
import Fade from "../components/fade";
import LendDialog from "../components/lend-dialog";
import ReturnDialog from "../components/return-dialog";
import NewBookDialog from "../components/new-book";
import Books from "../components/books";

export default function BookPage() {
  const [book, selectBook] = useState(null);

  const [q, setQuery] = useState("");
  const [dialog, setDialog] = useState("");
  const searchTerm = useDebounce(q, 200);

  return (
    <Page className="flex dark:bg-neutral-700">
      <ReturnDialog isOpen={dialog === "return"} onClose={setDialog} />
      <LendDialog isOpen={dialog === "lend"} onClose={setDialog} />
      <NewBookDialog isOpen={dialog === "new-book"} onClose={setDialog} />

      <div className="flex-1 flex flex-col">
        <PageHeader query={q} onQueryChange={setQuery} />
        <section className="flex flex-col flex-1 overflow-auto">
          <Books
            q={searchTerm}
            onSelectBook={selectBook}
            onAction={setDialog}
          />
        </section>
        <Fade gradient="from-transparent to-white dark:to-neutral-800" />
      </div>
      {book != null && (
        <Details
          onAction={setDialog}
          {...book}
          onClose={() => selectBook(null)}
        />
      )}
    </Page>
  );
}
