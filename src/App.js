/** @format */

import React from "react";
import "./App.css";
import Button from "./component/Button";
import QuizScreen from "./screens/QuizScreen";
import { colors } from "./config/colors";

const style = {
  flex: 1,
  margin: 20,
  border: 2,
  backgroundColor: "black",
};

const App = () => {
  const handleNextQuestion = () => {};

  return (
    <div
      style={{
        flex: 1,
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 300,
        marginRight: 300,
      }}
    >
      <QuizScreen />
      {/* <Button title="Next Question" onClick={handleNextQuestion} /> */}
    </div>
  );
};

export default App;
