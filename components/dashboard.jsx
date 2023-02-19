import Spacer from "./spacer";
import { CompactCalendar, Calendar } from "./calendar";
import { useState } from "react";
function UserInfo() {
  return (
    <div>
      <img
        src="/me.jpeg"
        className="w-12 h-12 rounded-full shadow-sm object-cover"
      />
      <h1 className="text-2xl mt-1 font-semibol">Hans Mustermann</h1>
      <span className="text-lg font-thin">Library manager</span>
    </div>
  );
}
export default function Dashbaord() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="flex flex-1 h-fit mb-12 border bg-neutral-50 rounded-lg overflow-hidden">
      <aside className="flex flex-col w-1/6 min-w-[15em] bg-gray-900 p-6  text-white">
        <UserInfo />
        <Spacer />
        <CompactCalendar value={date} onChange={setDate} />
      </aside>
      <Calendar />
    </div>
  );
}
