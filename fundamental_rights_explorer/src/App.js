import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import RightsList from './components/RightsList';
import RightDetail from './components/RightDetail';

/*
  Main App component: sets up navigation bar and application routes.
  Uses React Router for SPA navigation.
*/

// PUBLIC_INTERFACE
function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div className="logo">
                <span className="logo-symbol">*</span> Fundamental Rights
              </div>
              <a
                className="btn"
                href="https://en.wikipedia.org/wiki/Fundamental_Rights,_Directive_Principles_and_Fundamental_Duties_of_India"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                Learn More
              </a>
            </div>
          </div>
        </nav>
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<RightsList />} />
              <Route path="/right/:id" element={<RightDetail />} />
              <Route path="*" element={<div style={{ marginTop: "120px", textAlign: "center" }}><h2>Page Not Found</h2></div>} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;