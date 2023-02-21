import { useState } from "react";
import { Calendar, CompactCalendar } from "./calendar";
import SignOutIcon from "./icons/sign-out";
import Spacer from "./spacer";
import Button from "./button";

function UserInfo() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <img
          src="/me.jpeg"
          className="w-12 h-12 rounded-full shadow-sm object-cover"
        />
        <a href="/login">
          <Button style="icon" size="tiny" icon={SignOutIcon} />
        </a>
      </div>
      <h1 className="text-2xl mt-1 font-semibol">Hans Mustermann</h1>
      <span className="text-lg font-thin">Library manager</span>
    </div>
  );
}
export default function Dashbaord() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="flex flex-1 h-fit border-t bg-neutral-50 overflow-hidden dark:border-0">
      <aside className="flex flex-col w-1/6 min-w-[15em]  bg-gradient-to-b from-gray-900 to-gray-800 p-6  text-white">
        <UserInfo />
        <Spacer />
        <CompactCalendar value={date} onChange={setDate} />
      </aside>
      <Calendar />
    </div>
  );
}
