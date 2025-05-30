import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import fundamentalRights from "../fundamentalRightsData";
import "./RightsList.css";

/*
  RightsList displays all fundamental rights as animated, clickable buttons.
  Navigates to detail page on click, with beautiful button entrance, hover, and click animations.
*/

// PUBLIC_INTERFACE
function RightsList() {
  // Animate each button upon mount
  const btnRefs = useRef([]);

  useEffect(() => {
    btnRefs.current.forEach((btn, idx) => {
      if (btn) {
        // Use a staggered delay for each button for entrance animation
        btn.style.animationDelay = `${idx * 90}ms`;
        btn.classList.add("btn-entrance");
      }
    });
    // Clean up on unmount
    return () => {
      btnRefs.current.forEach((btn) => {
        if (btn) btn.classList.remove("btn-entrance");
      });
    };
  }, []);

  return (
    <div className="rights-list">
      <h1 className="title entrance-title">Fundamental Rights Explorer</h1>
      <div className="rights-grid">
        {fundamentalRights.map((right, idx) => (
          <Link
            key={right.id}
            to={`/right/${right.id}`}
            className="right-btn"
            tabIndex={0}
            ref={(el) => (btnRefs.current[idx] = el)}
          >
            {right.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RightsList;
