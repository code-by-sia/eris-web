import Header from "./header";
import Spacer from "./spacer";
import Button from "./button";
import Badges from "./badges";
import Fade from "./fade";
import { ChevronRight } from "./icons/chevron";

export default function DetailSide({
  volumeInfo,
  accessInfo,
  onAction,
  onClose,
}) {
  return (
    <aside className="flex flex-col bg-gray-900 text-white h-screen max-h-screen px-6 pt-3 z-30">
      <h1 className="flex font-bold py-6 text-center justify-between items-center ">
        <strong className="flex-1 font-bold text-xl text-center">
          About the book
        </strong>
        <Button
          style="icon"
          size="tiny"
          className="top-4 right-4 text-white"
          icon={ChevronRight}
          onClick={onClose}
        />
      </h1>

      <div className="cursor-pointer  items-center flex flex-col w-full items-center gap-2 rounded-lg mx-auto">
        <img
          src={volumeInfo?.imageLinks?.thumbnail}
          alt="cover"
          className="rounded-xl mx-auto w-full object-contain max-h-[18em]"
        />
        <h1 className="flex flex-col text-center h-20 text-md py-2 w-64">
          <strong>{volumeInfo?.title}</strong>
          <span className="text-gray-700 text-sm">
            {volumeInfo?.authors?.join()}
          </span>
        </h1>
      </div>
      <Badges
        value={{ pages: volumeInfo?.pageCount, reviews: 103, rating: 813 }}
      />
      <Spacer />
      <Header className="self-start font-bold">Description</Header>
      {volumeInfo?.description && (
        <div className=" relative py-2  text-neutral-500">
          <span className="flex  flex-col overflow-auto  w-64 min-h-[5em] max-h-[15em]">
            <span className="font-semibold  text-neutral-400">
              {volumeInfo?.subtitle}
            </span>

            {volumeInfo?.description}
          </span>
          <Fade style="footer" gradient="from-transparent to-gray-900" />
        </div>
      )}

      <footer className="py-6">
        <Button
          label={!accessInfo?.embeddable ? "Lend Book" : "Return Book"}
          onClick={() => onAction(accessInfo?.embeddable ? "return" : "lend")}
        />
      </footer>
    </aside>
  );
}
