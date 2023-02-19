import Dialog from "./dialog";
import CheckIcon from "./icons/check";
import Spacer from "./spacer";
import CrossIcon from "./icons/cross";
import Button from "./button";
import Select from "./select";
import { useState } from "react";

export default function ReturnDialog(props) {
  const [condition, setCondition] = useState("Perfect");
  return (
    <Dialog className="w-1/3 flex flex-col" {...props}>
      <h1 className="flex space-between w-full">
        <strong>Return Book</strong>
        <Spacer />

        <span onClick={() => props.onClose()}>
          <CrossIcon className="h-6 text-gray-500 hover:text-black cursor-pointer" />
        </span>
      </h1>
      <div className="border overflow-hidden flex-1 flex flex-col mt-6 rounded bg-neutral-100">
        <a
          href="#"
          className="flex p-6 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <div className="flex-shrink-0">
            <img
              className="rounded-full w-12 h-12"
              src="/member/hive.jpeg"
              alt="Hîva image"
            />
            <div className="absolute flex items-center justify-center w-5 h-5 ml-8 -mt-4 bg-blue-600 border border-white rounded-full dark:border-gray-800">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
              </svg>
            </div>
          </div>
          <div className="w-full pl-3">
            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">
                Hîwa Gewreşar
              </span>
              : Normal member
            </div>

            <div className="text-xs ">
              <span className="text-neutral-600">Last activity: </span>
              <span className="text-blue-600 dark:text-blue-500">
                a few moments ago.
              </span>
            </div>
          </div>
        </a>
        <div className="bg-neutral-50 flex border-t px-6 py-3 flex-col items-start justify-center mt-3">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Book condition:
          </label>
          <Select
            value={condition}
            onChange={setCondition}
            options={["Perfect", "Damaged", "Lost"]}
          />
        </div>
      </div>

      <div className="mt-3 gap-2 flex justify-evenly">
        <Spacer />
        <Button size="medium" label="Confirm" icon={CheckIcon} />
      </div>
    </Dialog>
  );
}
