/** @format */
import React from "react";
import { font } from "../config/font";
import { colors } from "../config/colors";
import { AiFillStar } from "react-icons/ai";

function Header({ questionNumber, category, difficulty, totalQuestion }) {
  const decodedCategory = decodeURIComponent(category);
  return (
    <div>
      <div style={style.heading}>
        Question {questionNumber} of {totalQuestion}
      </div>
      <div style={style.subHeading}>{decodedCategory}</div>
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
