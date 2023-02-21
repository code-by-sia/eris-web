export default function Book({ volumeInfo, onClick }) {
  return (
    <div
      className="cursor-pointer flex flex-col max-w-[12em] items-center justify-end "
      onClick={onClick}
    >
      <div className="p-2 rounded-lg group hover:shadow-lg hover:bg-blue-600 dark:hover:bg-blue-900">
        <img
          src={volumeInfo?.imageLinks?.smallThumbnail}
          alt="cover"
          className="rounded-lg mt-auto w-full"
        />
        <h1 className="dark:text-neutral-300 group-hover:text-white dark:group-hover:text-neutral-100 flex flex-col h-20 overflow-hidden text-md p-2">
          <strong className="">{volumeInfo.title}</strong>
          <span className="group-hover:text-neutral-100 text-gray-500 dark:text-neutral-400 text-sm">
            {volumeInfo?.authors?.join()}
          </span>
        </h1>
      </div>
    </div>
  );
}
