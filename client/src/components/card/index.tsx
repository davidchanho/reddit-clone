import React, { PropsWithChildren } from "react";

interface Props {
  hover?: boolean;
}

const Card = ({ children, hover = false }: PropsWithChildren<Props>) => {
  return (
    <div
      className={`bg-white p-0 rounded border ${
        hover ? "hover:border-gray-400" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
