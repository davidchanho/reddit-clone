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
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="flex flex-row divide-x">
      <div className="flex flex-row">
        <Link to="/r/popular">
          <TrendingUpIcon className="w-6 h-6" />
        </Link>
        <Link to="/r/all">
          <ChartSquareBarIcon className="w-6 h-6" />
        </Link>
        <Link to="#">
          <VideoCameraIcon className="w-6 h-6" />
        </Link>
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
