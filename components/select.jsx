import { ChevronUpDown } from "./icons/chevron";
export default function Select({ className, value, onChange, options = [] }) {
  return (
    <div class="relative flex justify-center items-center w-full">
      <ChevronUpDown className="h-6 absolute right-1 top-2" />
      <div class="mb-3 flex-1">
        <select
          class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options?.map((it) => (
            <option value={it}>{it}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
