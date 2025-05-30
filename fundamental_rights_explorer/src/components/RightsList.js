import React from "react";
import { Link } from "react-router-dom";
import fundamentalRights from "../fundamentalRightsData";
import "./RightsList.css";

/*
  RightsList displays all fundamental rights as animated, clickable buttons.
  Navigates to detail page on click.
*/

// PUBLIC_INTERFACE
function RightsList() {
  return (
    <div className="rights-list">
      <h1 className="title">Fundamental Rights Explorer</h1>
      <div className="rights-grid">
        {fundamentalRights.map((right) => (
          <Link
            key={right.id}
            to={`/right/${right.id}`}
            className="right-btn"
            tabIndex={0}
          >
            {right.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RightsList;
