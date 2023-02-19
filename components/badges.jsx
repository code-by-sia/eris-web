import BadgeItem from "./badge-item";

export default function Badges({ value }) {
  return (
    <div className="flex rounded-xl bg-neutral-600/10 p-3 mt-6 mx-auto divide-x justify-evenly  divide-gray-800">
      {Object.keys(value).map((it) => (
        <BadgeItem value={value[it]} label={it} key={it} />
      ))}
    </div>
  );
}
