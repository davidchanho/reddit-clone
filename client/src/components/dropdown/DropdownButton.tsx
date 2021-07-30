import { Menu } from "@headlessui/react";
import React, { PropsWithChildren } from "react";

function DropdownButton({ children }: PropsWithChildren<{}>) {
  return (
    <Menu.Button className="inline-flex justify-between items-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none">
      {children}
    </Menu.Button>
  );
}

export default DropdownButton;
