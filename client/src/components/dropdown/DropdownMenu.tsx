import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, PropsWithChildren } from "react";

interface Props {
  open: boolean;
}

function DropdownMenu({ children, open }: PropsWithChildren<Props>) {
  return (
    <Transition
      show={open}
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items
        static
        className="w-full origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
      >
        <div className="py-1">{children}</div>
      </Menu.Items>
    </Transition>
  );
}

export default DropdownMenu;
