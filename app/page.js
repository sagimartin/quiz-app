"use client";
import { questions } from "./questions";
import { useState } from "react";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const question = questions[currentQuestion];

  function handleOptionSelect(option) {
    setSelectedOption(option);
    setShowAnswer(true);
  }

  return (
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
        <p>1 out of 5</p>
        <button className="next">Next</button>
      </div>
    </div>
  );
}
