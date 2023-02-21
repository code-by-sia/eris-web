import Button from "./button";
import { ChevronLeft, ChevronRight } from "./icons/chevron";
import { UserPlusIcon } from "./icons/user";
import MemberItem from "./member-item";

const members = [
  {
    id: 1,
    name: "Zara Reşe",
    image: "/member/zara.jpeg",
    email: "zara-rasha@google.com",
  },
  {
    id: 2,
    name: "Hîwa Şêxe",
    image: "/member/hive.jpeg",
    email: "hshexa_1980@google.com",
  },
];

export default function Members() {
  return (
    <div className="flex flex-1 p-6 flex-col bg-neutral-100 dark:bg-neutral-700">
      <div className="flex flex-1 flex-col border bg-white dark:border-0 dark:bg-gray-700 rounded-lg shadow overflow-hidden">
        <div className="flex items-center justify-between p-2 border-b bg-neutral-50 dark:bg-neutral-900 dark:border-0 dark:text-neutral-100">
          <h1 className="text-lg px-3 font-bold">Users</h1>
          <Button icon={UserPlusIcon} size="action" label="Add member" />
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col divide-y dark:divide-gray-800/50">
          {members.map((it) => (
            <MemberItem key={it.id} {...it} />
          ))}
        </div>
        <div className="flex items-center justify-between border-t p-3 bg-neutral-50 dark:bg-neutral-900 dark:text-neutral-300 dark:border-t-0">
          <strong>Page 1 of 1</strong>
          <small>2 results</small>
          <div className="flex">
            <Button style="icon" size="" icon={ChevronLeft} />
            <Button style="icon" size="" icon={ChevronRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
