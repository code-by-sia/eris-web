import Dialog from "./dialog";
import CheckIcon from "./icons/check";
import Spacer from "./spacer";
import CrossIcon from "./icons/cross";
import Button from "./button";
import Select from "./select";
import { useState } from "react";
import Input from "./input";
import TextField from "./text-field";

export default function NewBookDialog(props) {
  const [condition, setCondition] = useState("Perfect");
  return (
    <Dialog className="w-1/3 flex flex-col" {...props}>
      <h1 className="flex space-between w-full">
        <strong>Add new Book</strong>
        <Spacer />

        <span onClick={() => props.onClose()}>
          <CrossIcon className="h-6 text-gray-500 hover:text-black dark:hover:text-white cursor-pointer" />
        </span>
      </h1>
      <div className="border overflow-hidden flex-1 flex flex-col mt-6 rounded bg-neutral-100 dark:bg-neutral-700 dark:border-0">
        <span className="bg-yellow-100 dark:bg-yellow-600 p-3 m-3 rounded-lg border dark:border-0 dark:text-black">
          TODO: Add file uploader
        </span>
        <div className="bg-neutral-50 dark:bg-neutral-700 gap-2 flex border-t px-6 py-3 flex-col items-start justify-center mt-3 dark:border-0">
          <TextField textClassName="p-2" className="w-full" label="Name" />
          <TextField textClassName="p-2" className="w-full" label="Author" />
          <TextField
            type="textarea"
            textClassName="p-2"
            className="w-full"
            label="Description"
          />

          <div className="flex flex-col w-full">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category:
            </label>
            <Select
              value={condition}
              onChange={setCondition}
              options={["Science", "Medical", "Engineering", "..."]}
            />
          </div>
        </div>
      </div>

      <div className="mt-3 gap-2 flex justify-evenly">
        <Spacer />
        <Button size="medium" label="Confirm" icon={CheckIcon} />
      </div>
    </Dialog>
  );
}
