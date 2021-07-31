import {
  LinkIcon,
  PhotographIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../card";

function CreatePost() {
  return (
    <Card>
      <div className="grid grid-cols-4">
        <UserCircleIcon className="w-6 h-6" />
        <NavLink className='w-full' to="/create">asdf</NavLink>
        <PhotographIcon className="w-6 h-6" />
        <LinkIcon className="w-6 h-6" />
      </div>
    </Card>
  );
}

export default CreatePost;
