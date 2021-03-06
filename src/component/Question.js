/** @format */

import React from "react";
import { font } from "../config/font";

const Question = ({ children, styles }) => {
  const decode = decodeURIComponent(children);
  return <p style={{ ...style.text, ...styles }}>{decode}</p>;
};
const style = {
  text: {
    fontSize: font.questionText,
    fontFamily: font.fontFamily,
    lineHeight: 1.7,
  },
};

export default Question;
