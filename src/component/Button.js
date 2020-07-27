/** @format */

import React from "react";
import { font } from "../config/font";

function Button({ value, title, onClick, styles, disable }) {
  const button = {
    padding: 10,
    width: 200,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "black",
    fontWeight: "bold",
    fontSize: font.size,
  };

  const decodedTitle = decodeURIComponent(title).split(",");
  return (
    <button
      disabled={disable}
      key={value}
      value={value}
      style={{
        ...button,
        ...styles,
      }}
      onClick={(id) => onClick(id)}
    >
      {decodedTitle}
    </button>
  );
}

export default Button;
