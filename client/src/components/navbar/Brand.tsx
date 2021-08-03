import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RedditLogo } from "../../assets/logos/Reddit_Lockup_OnWhite.svg";

function Brand() {
  return (
    <Link to="/">
      <RedditLogo className="h-14 w-auto" />
    </Link>
  );
}

export default Brand;
