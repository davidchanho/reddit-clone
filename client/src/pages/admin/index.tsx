import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { IComment, IPost, ISubreddit, IUser } from "../../../../shared/types";
import { classNames } from "../../helpers";
import {
  FETCH_DASHBOARD,
  REMOVE_COMMENT,
  REMOVE_POST,
  REMOVE_SUBREDDIT,
  REMOVE_USER,
} from "../../queries";
import { CommentProps, PostProps, UserProps } from "../../types";
import { SubredditProps } from "../../types/subreddits";

const Post = ({ post }: PostProps) => {
  const [removePost, { client }] = useMutation(REMOVE_POST, {
    variables: {
      _id: post._id,
    },
  });

  const handleRemove = () => {
    removePost();
    client.resetStore();
  };

  return (
    <div className="p-3 border">
      {post.title} <button onClick={handleRemove}>remove</button>
    </div>
  );
};

const Posts = () => {
  const { loading, error, data } = useQuery(FETCH_DASHBOARD);

  if (loading) return null;
  if (error) return null;

  return (
    <div>
      <p className="text-2xl">Posts</p>
      <div className="overflow-y-scroll h-48">
        {data.posts.map((post: IPost) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};

const Subreddit = ({ subreddit }: SubredditProps) => {
  const [removeSubreddit, { client }] = useMutation(REMOVE_SUBREDDIT, {
    variables: {
      _id: subreddit._id,
    },
  });

  const handleRemove = () => {
    removeSubreddit();
    client.resetStore();
  };

  return (
    <div className="p-3 border">
      {subreddit.name} <button onClick={handleRemove}>remove</button>
    </div>
  );
};

const Subreddits = () => {
  const { loading, error, data } = useQuery(FETCH_DASHBOARD);

  if (loading) return null;
  if (error) return null;

  return (
    <div>
      <p className="text-2xl">Subreddits</p>
      <div className="overflow-y-scroll h-48">
        {data.subreddits.map((subreddit: ISubreddit) => {
          return <Subreddit key={subreddit._id} subreddit={subreddit} />;
        })}
      </div>
    </div>
  );
};

const User = ({ user }: UserProps) => {
  const [removeUser, { client }] = useMutation(REMOVE_USER, {
    variables: {
      _id: user._id,
    },
  });

  const handleRemove = () => {
    removeUser();
    client.resetStore();
  };

  return (
    <div className="p-3 border">
      {user.name} <button onClick={handleRemove}>remove</button>
    </div>
  );
};

const Users = () => {
  const { loading, error, data } = useQuery(FETCH_DASHBOARD);

  if (loading) return null;
  if (error) return null;

  return (
    <div>
      <p className="text-2xl">Users</p>
      <div className="overflow-y-scroll h-48">
        {data.users.map((user: IUser) => {
          return <User key={user._id} user={user} />;
        })}
      </div>
    </div>
  );
};

const Comment = ({ comment }: CommentProps) => {
  const [removeComment, { client }] = useMutation(REMOVE_COMMENT, {
    variables: {
      _id: comment._id,
    },
  });

  const handleRemove = () => {
    removeComment();
    client.resetStore();
  };

  return (
    <div className="p-3 border">
      {comment.body} <button onClick={handleRemove}>remove</button>
    </div>
  );
};

const Comments = () => {
  const { loading, error, data } = useQuery(FETCH_DASHBOARD);

  if (loading) return null;
  if (error) return null;

  return (
    <div>
      <p className="text-2xl">Comments</p>
      <div className="overflow-y-scroll h-48">
        {data.comments.map((comment: IComment) => {
          return <Comment key={comment._id} comment={comment} />;
        })}
      </div>
    </div>
  );
};

function AdminDashboard() {
  const [tabs] = useState([
    { name: "Posts", href: "#", content: <Posts /> },
    { name: "Comments", href: "#", content: <Comments /> },
    { name: "Users", href: "#", content: <Users /> },
    { name: "Subreddit", href: "#", content: <Subreddits /> },
  ]);
  const [active, setActive] = useState(0);

  return (
    <div className="">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          defaultValue={tabs[active].name}
        >
          {tabs.map((tab, index) => (
            <option key={tab.name} onClick={() => setActive(index)}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab, index) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  index === active
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                  "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                )}
                aria-current={index === active ? "page" : undefined}
                onClick={() => setActive(index)}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          {tabs
            .filter((tab, index) => active === index)
            .map((tab) => (
              <div key={tab.name}>{tab.content}</div>
            ))}
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
