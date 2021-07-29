import { useQuery } from "@apollo/client";
import React from "react";
import { feeds, other } from "../../data";
import { FETCH_SUBREDDITS } from "../../queries/subreddits";
import Section from "./Section";

function Sidebar() {
  const { loading, error, data } = useQuery(FETCH_SUBREDDITS);

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
