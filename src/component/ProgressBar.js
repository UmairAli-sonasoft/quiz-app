/** @format */
import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed, height, styles, scores = 0, topBar } = props;
  const { minScore = 0, maxScore = 0, currentScore = 0 } = scores;
  const containerStyles = {
    height,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    // margin: 50,
  };
  const mainContainerStyles = {
    height,
    width: "100%",
    // marginBottom: 100,
  };

  const fillerStyles = {
    height: "inherit",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const minScoreStyles = {
    ...fillerStyles,
    width: `${minScore}%`,
    backgroundColor: "black",
    position: "absolute",
  };
  const maxScoreStyles = {
    ...fillerStyles,
    width: `${maxScore}%`,
    backgroundColor: "#999999",
    position: "absolute",
  };
  const currentScoreStyles = {
    ...fillerStyles,
    width: `${currentScore}%`,
    backgroundColor: "#7a7a7a",
    position: "absolute",
  };

  return (
    <div style={{ ...mainContainerStyles, marginBottom: 50 }}>
      {!topBar && (
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            ...styles,
          }}
        >
          <span style={{ color: "black" }}>MinScore: {minScore}%</span>
          <span style={{ color: "#696969" }}>
            currentScore: {currentScore}%
          </span>
          <span style={{ color: "#999999" }}>MaxScore: {maxScore}%</span>
        </div>
      )}

      <div style={{ ...containerStyles, position: "relative" }}>
        {topBar && <div style={fillerStyles} />}
        {!topBar && (
          <>
            <div style={maxScoreStyles} />
            <div style={currentScoreStyles} />
            <div style={minScoreStyles} />
          </>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
