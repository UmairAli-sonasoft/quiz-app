/** @format */

import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Question from "../component/Question";
import Options from "../component/Options";
import Button from "../component/Button";
import { font } from "../config/font";
import { quizData } from "../quizData";
import ProgressBar from "../component/ProgressBar";
import FinishScreen from "./FinishScreen";

const QuizScreen = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [quizQuestion, setQuizQuestion] = useState(
    quizData[questionNumber - 1]
  );
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [percentages, setPercentages] = useState(0);
  const [disableNext, setDisableNext] = useState(true);

  const {
    category,
    difficulty,
    question,
    correct_answer,
    incorrect_answers,
    type,
  } = quizQuestion || {};

  const moveToNextQuestion = () => {
    setQuestionNumber((questionNum) => questionNum + 1);
    setMessage("");
    setSelected("");
    calculatePercentages();
    setDisableNext(true);
  };

  const updateUserMessage = () => {
    if (selected === correct_answer) {
      setScore((prevScore) => prevScore + 1);
      setMessage("Correct😍");
    } else if (incorrect_answers && incorrect_answers.includes(selected))
      setMessage("Wrong😥");
    else setMessage("");
  };

  useEffect(() => {
    setQuizQuestion(quizData[questionNumber]);
    updateUserMessage();
  }, [selected, questionNumber, difficulty]);

  const handleClick = (e) => {
    setSelected(e.target.value);
    setDisableNext(false);
  };

  const calculatePercentage = (now, total) => Math.floor((100 * now) / total);

  const calculatePercentages = () => {
    const remainingQuestion = 20 - questionNumber;
    const currentScore = calculatePercentage(score, questionNumber);
    const maxScore = calculatePercentage(score + remainingQuestion, 20);
    const minScore = calculatePercentage(score, 20);

    setPercentages({
      currentScore,
      maxScore,
      minScore,
    });
  };

  const resetGame = () => {
    setDisableNext(true);
    setPercentages(0);
    setMessage("");
    setScore(0);
    setSelected("");
    setQuestionNumber(0);
  };

  if (!quizQuestion) return <FinishScreen onClick={resetGame} score={score} />;
  else
    return (
      <div
        style={{
          borderWidth: 5,
          border: "black",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <ProgressBar
          topBar
          scores={percentages}
          completed={questionNumber * 5}
          bgcolor="black"
          height={20}
        />

        <Header
          category={category}
          questionNumber={questionNumber}
          difficulty={difficulty}
        />

        <Question styles={style.question}>{question}</Question>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Options
            selected={selected}
            onClick={handleClick}
            options={[...incorrect_answers, correct_answer].sort()}
          />
        </div>
        <div style={style.status}>{message}</div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Button
            title="Next"
            styles={{
              padding: 10,
              fontSize: 25,
            }}
            onClick={moveToNextQuestion}
            disable={disableNext}
          />
        </div>

        <ProgressBar
          bgcolor="black"
          height={50}
          styles={{
            marginTop: 50,
          }}
          scores={percentages}
        />
      </div>
    );
};

const style = {
  question: {
    marginTop: 20,
    marginBottom: 20,
  },

  status: {
    fontSize: font.headingTextSize,
    display: "flex",
    width: "100%",
    justifyContent: "center",
    fontFamily: font.fontFamily,
    fontWeight: "bold",
    margin: 10,
  },
};

export default QuizScreen;
