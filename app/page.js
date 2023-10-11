"use client";
import { questions } from "./questions";
import { useState } from "react";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResult] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const question = questions[currentQuestion];

  const percentage = (score / questions.length) * 100;
  let resultStyle = "result-message";
  if (percentage < 60) {
    resultStyle += " red-text";
  } else if (percentage < 100) {
    resultStyle += " gray-text";
  } else {
    resultStyle += " green-text";
  }

  function handleOptionSelect(option) {
    setSelectedOption(option);
    setShowAnswer(true);
    if (option === question.answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setIsNextDisabled(false);
  }

  function handleNextQuestion() {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setShowAnswer(false);
    setIsNextDisabled(true);
    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
      setCurrentQuestion(0);
    }
  }

  function restartQuiz() {
    setShowResult(false);
    setCurrentQuestion(0);
    setScore(0);
    setIsNextDisabled(true);
  }

  return (
    <div className="quiz-container">
      {showResults ? (
        <div className="score-message">
          <h2>
            You scored {score} out of {questions.length}
          </h2>
          <h3 className={resultStyle}>
            That's {percentage.toFixed(2)}%{" "}
            {percentage < 41
              ? "You can do better. Try again!"
              : percentage < 61
              ? "Not bad, but room for improvement."
              : percentage === 100
              ? "Congratulations!"
              : ""}
          </h3>
          <button className="restart-button" onClick={restartQuiz}>
            Start the Quiz Again
          </button>
        </div>
      ) : (
        <div className="quiz-app">
          <div className="quiz-header">
            <h1>Quiz App</h1>
          </div>
          <div className="quiz-body">
            <h1>
              {question.id}. {question.question}
            </h1>
            <div className="options">
              {question.options.map((option) => {
                return (
                  <button
                    className={
                      showAnswer && option === question.answer
                        ? "correct-answer"
                        : showAnswer && option === selectedOption
                        ? "wrong-answer"
                        : ""
                    }
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="quiz-footer">
            <p>
              {currentQuestion + 1} out of {questions.length}
            </p>
            <button
              onClick={handleNextQuestion}
              style={{ display: isNextDisabled ? "none" : "block" }}
              className="next"
            >
              Next
            </button>
          </div>
        </div>
      )}
      <div className="credit">
        <p>
          2023 //{" "}
          <a href="https://www.sagimartin.com" target="_blank">
            @sagimartin
          </a>
        </p>
      </div>
    </div>
  );
}
