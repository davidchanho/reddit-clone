import React from "react";
import {feeds, other} from "../../data";
import { useFetchSubreddits } from "../../hooks";
import Section from "./Section";

function Sidebar() {
  const { loading, error, data } = useFetchSubreddits();

  if (loading) return null;
  if (error) return null;

  return (
    <aside>
      <Section name="my community" items={data.subreddits} />
      <Section name="feeds" items={feeds} />
      <Section name="other" items={other} />
    </aside>
  );
}

export default Sidebar;
