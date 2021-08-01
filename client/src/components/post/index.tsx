import { Menu, Transition } from "@headlessui/react";
import {
  BookmarkIcon,
  ChatAltIcon,
  DotsHorizontalIcon,
  EyeOffIcon,
  FlagIcon,
  GiftIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import React, { Fragment, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { PostProps } from "../../types/posts";
import Card from "../card";
import Likes from "./Likes";
import PostHeader from "./PostHeader";

const Option = ({ children }: PropsWithChildren<{}>) => {
  return (
    <button className="flex flex-row gap-2 cursor-pointer hover:bg-gray-200 p-2 w-full">
      {children}
    </button>
  );
};

function MoreOptions() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="flex flex-row gap-2 cursor-pointer hover:bg-gray-200 p-2 w-full">
              <DotsHorizontalIcon className="w-6 h-6" />
            </Menu.Button>
          </div>

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
              className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  <Option>
                    <EyeOffIcon className="w-6 h-6" /> <p>Hide</p>
                  </Option>
                </Menu.Item>
                <Menu.Item>
                  <Option>
                    <FlagIcon className="w-6 h-6" /> <p>Report</p>
                  </Option>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

function Post({ post }: PostProps) {
  return (
    <Card hover>
      <div className="flex flex-row">
        <Likes post={post} />

        <div className="w-full p-3">
          <PostHeader post={post} />

          <Link to={`/r/${post.subreddit.name}/${post._id}`}>
            <div>
              <p className="font-bold capitalize text-lg">{post.title}</p>
              <p>{post.body}</p>
            </div>
          </Link>

          <footer className="flex flex-row gap-2">
            <Option>
              <ChatAltIcon className="w-6 h-6" />{" "}
              <p>{post?.comments?.length ? post?.comments?.length : 0}</p>
            </Option>
            <Option>
              <GiftIcon className="w-6 h-6" />
              <p>Award</p>
            </Option>
            <Option>
              <ShareIcon className="w-6 h-6" />
              <p>Share</p>
            </Option>
            <Option>
              <BookmarkIcon className="w-6 h-6" />
              <p>Save</p>
            </Option>
            <MoreOptions />
          </footer>
        </div>
      </div>
    </Card>
  );
}

export default Post;
