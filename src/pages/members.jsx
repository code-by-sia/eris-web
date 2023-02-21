import { useState } from "react";
import Members from "../components/members";
import Page from "../components/page";
import PageHeader from "../components/page-header";

export default function MembersPage() {
  const [page, setPage] = useState("Dashboard");
  const [q, setQuery] = useState("");

  return (
    <Page className="flex">
      <div className="flex-1 flex flex-col">
        <PageHeader
          nav={page}
          setNav={setPage}
          query={q}
          onQueryChange={setQuery}
        />
        <section className="flex flex-col flex-1 overflow-auto ">
          <Members />
        </section>
      </div>
    </Page>
  );
}
