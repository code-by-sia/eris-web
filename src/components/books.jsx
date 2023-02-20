import { useSearchBooksQuery } from "../store/books-api";
import Book from "./book";
import Fade from "./fade";
import Button from "./button";
import BookIcon from "./icons/book";

export default function Books({ q, onSelectBook, onAction }) {
  const { data, isLoading, error } = useSearchBooksQuery(q);

  return (
    <>
      <div className="absolute right-10 bottom-10 z-30">
        <Button
          label="Add Book"
          icon={BookIcon}
          size="action"
          onClick={() => onAction("new-book")}
        />
      </div>
      <Fade style="header" gradient="py-6 from-white to-transparent" />
      <div className="flex flex-wrap gap-3 relative justify-evenly px-3">
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
