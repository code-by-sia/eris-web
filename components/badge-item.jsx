export default function BadgeItem({ value, label }) {
  return (
    <span className="flex items-center flex-col p-2 px-4">
      <strong>{value}</strong>
      <small>{label}</small>
    </span>
  );
}
