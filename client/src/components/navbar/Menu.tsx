import {
  BellIcon,
  ChartSquareBarIcon,
  ChatIcon,
  DotsCircleHorizontalIcon,
  PlusIcon,
  TrendingUpIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import React from "react";

function Menu() {
  return (
    <div className="flex flex-row divide-x">
      <div className="flex flex-row">
        <TrendingUpIcon className="w-6 h-6" />
        <ChartSquareBarIcon className="w-6 h-6" />
        <VideoCameraIcon className="w-6 h-6" />
      </div>
      <div className="flex flex-row">
        <ChatIcon className="w-6 h-6" />
        <BellIcon className="w-6 h-6" />
        <PlusIcon className="w-6 h-6" />
        <DotsCircleHorizontalIcon className="w-6 h-6" />
      </div>
    </div>
  );
}

export default Menu;
