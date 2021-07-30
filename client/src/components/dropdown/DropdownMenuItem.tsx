import { Menu } from "@headlessui/react";
import React from "react";
import { classNames } from "../../helpers";

interface Props {
  label: string;
}

function DropdownMenuItem({ label }: Props) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block px-4 py-2 text-sm"
          )}
        >
          {label}
        </a>
      )}
    </Menu.Item>
  );
}

export default DropdownMenuItem;
