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
  const [results, setResults] = useState([]); // Array of true (correct) or false (incorrect)
  const [completed, setCompleted] = useState(false);

  if (!quizQuestions || quizQuestions.length === 0) {
    return <div>No quiz available for this right.</div>;
  }

  const currentQ = quizQuestions[current];

  const handleSelect = (idx) => {
    setSelectedOption(idx);
    setShowFeedback(true);
  };

  const isLast = current === quizQuestions.length - 1;
  const selectedIsCorrect =
    selectedOption !== null && currentQ.options[selectedOption].correct;

  const nextQuestion = () => {
    // Record result
    setResults((r) => [...r, selectedIsCorrect]);
    setSelectedOption(null);
    setShowFeedback(false);
    if (isLast) {
      setCompleted(true);
    } else {
      setCurrent((c) => c + 1);
    }
  };

  // Show summary when quiz is completed
  if (completed) {
    // The last answer isn't pushed until nextQuestion, so handle here if just finished
    const finalResults =
      results.length === quizQuestions.length
        ? results
        : [...results, selectedIsCorrect];
    const numCorrect = finalResults.filter(Boolean).length;
    const numTotal = quizQuestions.length;
    const numIncorrect = numTotal - numCorrect;
    const allCorrect = numCorrect === numTotal;

    return (
      <div className="quiz-section">
        <h2 className="quiz-title">Quiz Results</h2>
        <div className="quiz-complete-message">
          Quiz complete! 🎉
        </div>
        <div style={{ margin: "1rem 0", textAlign: "center" }}>
          <span>
            Correct: <strong>{numCorrect}</strong>
            <span style={{ margin: "0 8px" }}></span>
            Incorrect: <strong>{numIncorrect}</strong>
          </span>
        </div>
        {allCorrect ? (
          <div className="quiz-achievement" style={{
            background: "#e3f9d9",
            color: "#16a846",
            fontWeight: 600,
            padding: "11px",
            borderRadius: "7px",
            marginBottom: "10px",
            textAlign: "center",
            border: "1.5px solid #4caf50"
          }}>
            Good achievement! You answered every question correctly!
          </div>
        ) : (
          <div className="quiz-summary-note" style={{
            color: "#E87A41",
            fontWeight: 500,
            textAlign: "center"
          }}>
            Review the explanations above and try again if you'd like!
          </div>
        )}
      </div>
    );
  }

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
          {selectedOption != null ? currentQ.options[selectedOption].feedback : ""}
        </div>
      )}
      {showFeedback && (
        <button
          className="btn next-btn"
          onClick={nextQuestion}
          tabIndex={0}
          style={{ marginTop: "1rem" }}
        >
          {isLast ? "Finish" : "Next"}
        </button>
      )}
    </div>
  );
}

export default Quiz;
