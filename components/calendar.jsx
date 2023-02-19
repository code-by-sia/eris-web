import { useState } from "react";
import { ChevronLeft, ChevronRight } from "./icons/chevron";
import Spacer from "./spacer";

function getYear(date = new Date()) {
  return date.getFullYear();
}

function getMonthName(date) {
  return date.toLocaleString("default", { month: "long" });
}

function prevMonth(date) {
  const copy = new Date(date * 1);
  if (copy.getMonth() === 0) {
    copy.setFullYear(copy.getFullYear() - 1);
    copy.setMonth(11);
  } else {
    copy.setMonth(copy.getMonth() - 1);
  }
  return copy;
}

function nextMonth(date) {
  const copy = new Date(date * 1);
  if (copy.getMonth() === 11) {
    copy.setFullYear(copy.getFullYear() + 1);
    copy.setMonth(0);
  } else {
    copy.setMonth(copy.getMonth() + 1);
  }
  return copy;
}

function firstDayOfMonth(date) {
  const copy = new Date(date * 1);
  copy.setDate(1);
  return copy;
}

function daysInMonth(date) {
  const prev = nextMonth(date);
  prev.setDate(0);
  return prev.getDate();
}

export function CompactCalendar() {
  const [date, setDate] = useState(new Date());

  const days = daysInMonth(date);
  const exDays = daysInMonth(prevMonth(date));
  const day = firstDayOfMonth(date).getDay(); // Sunday - Saturday : 0 - 6
  const daysToAdd = (day + 6) % 7;

  return (
    <div>
      <h1 className="flex items-center">
        <strong>
          {getMonthName(date)} {getYear(date)}
        </strong>
        <Spacer />
        <span onClick={() => setDate(prevMonth(date))}>
          <ChevronLeft className="h-6 hover:text-gray-200 cursor-pointer" />
        </span>
        <span onClick={() => setDate(nextMonth(date))}>
          <ChevronRight className="h-6 hover:text-gray-200 cursor-pointer" />
        </span>
      </h1>
      <div className="gap-2 text-center grid grid-cols-7 justify-around">
        <strong>M</strong>
        <strong>T</strong>
        <strong>W</strong>
        <strong>T</strong>
        <strong>F</strong>
        <strong>S</strong>
        <strong>S</strong>
        {Array.from(Array(daysToAdd).keys()).map((it) => (
          <span key={it} className="text-neutral-400">
            {exDays - (daysToAdd - 1 - it)}
          </span>
        ))}
        {Array.from(Array(days).keys()).map((it) => (
          <span key={it}>{it + 1}</span>
        ))}

        {Array.from(Array(7 - ((days + daysToAdd) % 7)).keys()).map((it) => (
          <span key={it} className="text-neutral-400">
            {it + 1}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Calendar() {
  return <div className="p-3">TODO: Calendar / expecting returns</div>;
}
