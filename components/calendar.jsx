import classNames from "classnames";
import { useMemo } from "react";
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

function moveToDay(date, day) {
  const copy = new Date(date * 1);
  copy.setDate(day);
  return copy;
}

function datesAreOnSameDay(first, second) {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}

function range(n) {
  return Array.from(Array(n).keys());
}

export function CalendarDay({ value, className = "", onClick }) {
  return (
    <span
      onClick={() => onClick(value)}
      className={classNames("cursor-pointer", className)}
    >
      {value.getDate()}
    </span>
  );
}

export function CompactCalendar({ value, onChange }) {
  const prev = prevMonth(value);
  const next = nextMonth(value);

  const days = daysInMonth(value);
  const exDays = daysInMonth(prev);
  const day = firstDayOfMonth(value).getDay(); // Sunday - Saturday : 0 - 6
  const daysToAdd = (day + 6) % 7;

  return (
    <div>
      <h1 className="flex items-center py-2">
        <strong>
          {getMonthName(value)} {getYear(value)}
        </strong>
        <Spacer />
        <span onClick={() => onChange(prev)}>
          <ChevronLeft className="h-6 hover:text-gray-200 cursor-pointer" />
        </span>
        <span onClick={() => onChange(next)}>
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
        {range(daysToAdd)
          .map((it) => exDays - (daysToAdd - 1 - it))
          .map((it) => moveToDay(prev, it))
          .map((it) => (
            <CalendarDay
              key={it}
              className="text-neutral-400"
              value={it}
              onClick={onChange}
            />
          ))}
        {range(days)
          .map((it) => moveToDay(value, it + 1))
          .map((it) => (
            <CalendarDay
              key={it}
              className={
                datesAreOnSameDay(it, value) ? "bg-indigo-600 rounded-lg" : ""
              }
              value={it}
              onClick={onChange}
            />
          ))}

        {range(7 - ((days + daysToAdd) % 7))
          .map((it) => moveToDay(next, it + 1))
          .map((it) => (
            <CalendarDay
              key={it}
              className="text-neutral-400"
              value={it}
              onClick={onChange}
            />
          ))}
      </div>
    </div>
  );
}

export function Calendar() {
  return <div className="p-3">TODO: Calendar / expecting returns</div>;
}
