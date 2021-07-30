import { useQuery } from "@apollo/client";
import React from "react";
import { useAppContext } from "../../context";
import { feeds, other } from "../../data";
import { FETCH_SUBREDDITS } from "../../queries";
import Section from "./Section";

function Sidebar() {
  const { loading, error, data } = useQuery(FETCH_SUBREDDITS);
  const {
    state: { isSidebarOpen },
  } = useAppContext();
  if (loading) return null;
  if (error) return null;

  return (
    <div
      className={`hidden lg:${
        isSidebarOpen ? "block" : "hidden"
      } lg:w-2/12 lg:col-span-3 xl:col-span-2`}
    >
      <nav
        aria-label="Sidebar"
        className="sticky top-4 divide-y divide-gray-300"
      >
        <Section name="my community" items={data.subreddits} />
        <Section name="feeds" items={feeds} />
        <Section name="other" items={other} />
      </nav>
    </div>
  );
}

export default Sidebar;
