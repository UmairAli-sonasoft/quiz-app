/** @format */

import React from "react";
import { font } from "../config/font";
import Button from "../component/Button";
import { colors } from "../config/colors";

function FinishScreen({ onClick, score }) {
  return (
    <div
      style={{
        fontSize: font.headingTextSize,
        fontWeight: "bold",
        fontFamily: font.fontFamily,
        color: colors.darkGray,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span>
        {score > 15 ? "WooHoo You Finish The Game" : "Sorry, You Failed"}
      </span>

      <Button onClick={onClick} styles={{ margin: 50 }} title="Start Again" />
    </div>
  );
}

export default FinishScreen;
