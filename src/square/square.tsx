import React from "react";
import { SquareProps } from "./square-props";

export const Square: React.FC<SquareProps> = (props: SquareProps) => {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
};
