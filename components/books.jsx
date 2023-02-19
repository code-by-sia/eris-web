import { useState, useEffect } from "react";
import Book from "./book";
import Fade from "./fade";

export default function Books({ q, onSelectBook }) {
  const [books, setBooks] = useState({});
  const url = "https://www.googleapis.com/books/v1/volumes";

  // TODO: use redux-toolkit
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
    <>
      <Fade style="header" gradient="py-6 from-white to-transparent" />
      <div className="flex flex-wrap gap-3 justify-evenly">
        {books?.items
          ?.filter((it) => it?.volumeInfo?.imageLinks?.smallThumbnail)
          ?.map((it) => (
            <Book
              key={it.id}
              id={it.id}
              {...it}
              onClick={() => onSelectBook(it)}
            />
          ))}
      </div>
    </>
  );
}
