export default function Book({ volumeInfo, onClick }) {
  return (
    <div
      className="group cursor-pointer flex flex-col max-w-[12em] items-center p-2 hover:bg-blue-600 rounded-lg"
      onClick={onClick}
    >
      <img
        src={volumeInfo?.imageLinks?.smallThumbnail}
        alt="cover"
        className="rounded-lg mt-auto w-full"
      />
      <h1 className="group-hover:text-white flex flex-col h-20 text-md p-2">
        <strong>{volumeInfo.title}</strong>
        <span className="group-hover:text-neutral-100 text-gray-500 text-sm">
          {volumeInfo?.authors?.join()}
        </span>
      </h1>
    </div>
  );
}
