import React from "react";
import Sprites from "./Sprites.svg";
// import "./LetterSvg.scss";

interface IconsProps {
  letter?: string;
  color?: string;
  size?: string;
}
// const Sprites = require("./Sprites.svg") as string;
const Icons = ({ letter, color, size }: IconsProps) => {
  return (
    <svg className="svg-letter" fill={"red"} width={50} height={50}>
      <use href={`.${Sprites}#icon-${letter}`} />
    </svg>
  );
};

// LetterSvg.defaultProps = {
//    size: 30,
//    color: 'black',
// };

export default Icons;
