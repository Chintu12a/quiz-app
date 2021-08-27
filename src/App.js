import React, { useState } from "react";
import "./styles/index.scss";
import questions from "./Components/Data";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButton = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <img
            alt="kalvi"
            src="https://media-exp1.licdn.com/dms/image/C4E0BAQG4TVYYasY1oA/company-logo_100_100/0/1539053140310?e=1638403200&v=beta&t=flUdfWQYi-u9ua-1cWi1C7XkT-OHzpFeTeYZ5zRXpbE"
          ></img>
          <h2>Kalvi Fun Learning</h2>
        </div>
      </nav>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
            <h4>
              {score === questions.length ? (
                <h6>"Wow! You're a Science wiz! Happy to have you here!"</h6>
              ) : (
                <h6>
                  "You're mostly there! Let us help you love Science even more!
                  "
                </h6>
              )}
            </h4>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1} </span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => {
                return (
                  <button
                    onClick={() => {
                      handleAnswerButton(answerOption.isCorrect);
                    }}
                  >
                    {answerOption.answerText}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}
