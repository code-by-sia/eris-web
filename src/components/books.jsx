import { useSearchBooksQuery } from "../store/books-api";
import Book from "./book";
import Fade from "./fade";

export default function Books({ q, onSelectBook }) {
  const { data, isLoading, error } = useSearchBooksQuery(q);

  return (
    <>
      <Fade style="header" gradient="py-6 from-white to-transparent" />
      <div className="flex flex-wrap gap-3 justify-evenly px-3">
        {data?.items
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
