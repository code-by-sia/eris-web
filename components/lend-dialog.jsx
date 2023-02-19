import { useState } from "react";
import Button from "./button";
import Dialog from "./dialog";
import CheckIcon from "./icons/check";
import CrossIcon from "./icons/cross";
import MemberList from "./member-list";
import Spacer from "./spacer";

export default function LendDialog(props) {
  const [member, pickMember] = useState();
  return (
    <Dialog className="w-1/3 flex flex-col" {...props}>
      <h1 className="flex space-between w-full">
        <strong>Lending Book</strong>
        <Spacer />
        <span onClick={() => props.onClose()}>
          <CrossIcon className="h-6 text-gray-500 hover:text-black cursor-pointer" />
        </span>
      </h1>

      <MemberList
        selected={member}
        onChange={pickMember}
        members={[
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
        ]}
      />

      <div className="mt-3 gap-2 flex justify-evenly">
        <Spacer />
        <Button
          size="medium"
          label="Confirm"
          disabled={!member}
          icon={CheckIcon}
        />
      </div>
    </Dialog>
  );
}
