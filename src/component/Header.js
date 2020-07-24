/** @format */
import React, { useEffect } from "react";
import { font } from "../config/font";
import { colors } from "../config/colors";
import { AiFillStar } from "react-icons/ai";

function Header({ questionNumber, category, difficulty }) {
  return (
    <div>
      <div style={style.heading}>Question {questionNumber} of 20</div>
      <div style={style.subHeading}>{category}</div>
      <div style={style.icon}>
        {(difficulty === "easy" ||
          difficulty === "hard" ||
          difficulty === "medium") && <AiFillStar color="black" size={20} />}
        {(difficulty === "medium" || difficulty === "hard") && (
          <AiFillStar color="black" size={20} />
        )}
        {difficulty === "hard" && <AiFillStar color="black" size={20} />}
      </div>
    </div>
  );
}

const style = {
  heading: {
    fontSize: font.headingTextSize,
    fontWeight: "bold",
    fontFamily: font.fontFamily,
    color: colors.darkGray,
  },
  subHeading: {
    color: colors.mediumGray,
  },
  icon: {
    marginTop: 5,
    marginBottom: 5,
  },
};

export default Header;
