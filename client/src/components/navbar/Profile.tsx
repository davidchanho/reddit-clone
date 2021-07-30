import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/outline";
import React from "react";
import Dropdown from "../dropdown";
import DropdownButton from "../dropdown/DropdownButton";
import DropdownMenu from "../dropdown/DropdownMenu";
import DropdownMenuItem from "../dropdown/DropdownMenuItem";

interface Props {
  open: boolean;
}

function Profile() {
  return (
    <Dropdown>
      {({ open }: Props) => (
        <>
          <DropdownButton>
            <div className="flex items-center">
              <div className="inline-block relative">
                <UserCircleIcon className="h-7 w-7 rounded-full" />
                <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-green-400" />
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  Reddit User
                </p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700 text-left">
                  1 karma
                </p>
              </div>
            </div>
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </DropdownButton>

          <DropdownMenu open={open}>
            <DropdownMenuItem label="Account settings" />
            <DropdownMenuItem label="Support" />
            <DropdownMenuItem label="Sign out" />
          </DropdownMenu>
        </>
      )}
    </Dropdown>
  );
}

export default Profile;
