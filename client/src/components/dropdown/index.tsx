import { Menu } from "@headlessui/react";
import React, { PropsWithChildren } from "react";

function Dropdown({ children }: PropsWithChildren<{}>) {
  return (
    <Menu as="div" className="relative inline-block w-full">
      {children}
    </Menu>
  );
}

export default Dropdown;
