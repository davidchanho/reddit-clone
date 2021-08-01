import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import React from "react";
import Dropdown from "../dropdown";
import DropdownButton from "../dropdown/DropdownButton";
import DropdownMenu from "../dropdown/DropdownMenu";

interface Props {
  open: boolean;
}

function Nav() {
  return (
    <Dropdown>
      {({ open }: Props) => (
        <>
          <DropdownButton>
            Home
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </DropdownButton>
          <DropdownMenu open={open}>
            <Menu.Item>
              <input className="block px-4 py-2 text-sm" placeholder="Filter" />
            </Menu.Item>
          </DropdownMenu>
        </>
      )}
    </Dropdown>
  );
}

export default Nav;
