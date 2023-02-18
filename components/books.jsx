import Book from "./book";

export default function Books({ value, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3 justify-evenly">
      {value?.items
        ?.filter((it) => it?.volumeInfo?.imageLinks?.smallThumbnail)
        ?.map((it) => (
          <Book key={it.id} id={it.id} {...it} onClick={() => onSelect(it)} />
        ))}
    </div>
  );
}
