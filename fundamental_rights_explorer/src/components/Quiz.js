import React, { useState } from "react";
import "./Quiz.css";

/*
  Quiz displays a sequence of multiple-choice questions with immediate feedback and explanations.
  Designed to be embedded inside RightDetail.
*/

// PUBLIC_INTERFACE
function Quiz({ quizQuestions }) {
  const [current, setCurrent] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  if (!quizQuestions || quizQuestions.length === 0) {
    return <div>No quiz available for this right.</div>;
  }

  const currentQ = quizQuestions[current];

  const handleSelect = (idx) => {
    setSelectedOption(idx);
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setShowFeedback(false);
    setCurrent((c) => c + 1);
  };

  const isLast = current === quizQuestions.length - 1;
  const selectedIsCorrect =
    selectedOption !== null && currentQ.options[selectedOption].correct;

  return (
    <div className="quiz-section">
      <h2 className="quiz-title">Quiz</h2>
      <div className="quiz-question">{currentQ.question}</div>
      <ul className="quiz-options">
        {currentQ.options.map((opt, idx) => (
          <li key={idx}>
            <button
              className={`quiz-option-btn ${
                showFeedback && idx === selectedOption
                  ? opt.correct
                    ? "correct"
                    : "incorrect"
                  : ""
              }`}
              onClick={() => !showFeedback && handleSelect(idx)}
              disabled={showFeedback}
              tabIndex={0}
            >
              {opt.text}
            </button>
          </li>
        ))}
      </ul>
      {showFeedback && (
        <div className={`quiz-feedback ${selectedIsCorrect ? "correct" : "incorrect"}`}>
          {currentQ.options[selectedOption].feedback}
        </div>
      )}
      {showFeedback && (
        <button
          className="btn next-btn"
          onClick={nextQuestion}
          disabled={isLast}
          tabIndex={0}
          style={{ marginTop: "1rem" }}
        >
          {isLast ? "Finish" : "Next"}
        </button>
      )}
      {showFeedback && isLast && (
        <div className="quiz-complete-message">Quiz complete! 🎉</div>
      )}
    </div>
  );
}

export default Quiz;
