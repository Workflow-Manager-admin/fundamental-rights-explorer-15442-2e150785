import React from "react";
import { useParams, Link } from "react-router-dom";
import fundamentalRights from "../fundamentalRightsData";
import Quiz from "./Quiz";
import "./RightDetail.css";

/*
  RightDetail displays the details of a selected fundamental right (title, explanation, example) and includes a Quiz.
*/

// PUBLIC_INTERFACE
function RightDetail() {
  const { id } = useParams();
  const right = fundamentalRights.find((r) => r.id === id);

  if (!right) {
    return (
      <div className="right-detail">
        <h2>Right Not Found</h2>
        <Link to="/" className="btn">
          Back to Rights List
        </Link>
      </div>
    );
  }

  return (
    <div className="right-detail">
      <Link to="/" className="btn back-btn">
        ← Back
      </Link>
      <h1 className="title">{right.title}</h1>
      <div className="explanation">
        {right.explanation}
      </div>
      <div className="real-life-example">
        <strong>Real-life Example:</strong> {right.example}
      </div>
      <hr />
      <Quiz quizQuestions={right.quiz} />
    </div>
  );
}

export default RightDetail;
