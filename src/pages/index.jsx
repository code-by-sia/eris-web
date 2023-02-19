import { useState } from "react";
import Dashbaord from "../components/dashboard";
import Page from "../components/page";
import PageHeader from "../components/page-header";

export default function DashboardPage() {
  const [q, setQuery] = useState("");
  return (
    <Page className="flex">
      <div className="flex-1 flex flex-col">
        <PageHeader query={q} onQueryChange={setQuery} />
        <section className="flex flex-col flex-1 overflow-auto">
          <Dashbaord />
        </section>
      </div>
    </Page>
  );
}
