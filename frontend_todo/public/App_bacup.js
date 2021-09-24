import React, {Component} from "react";
import './App.css';

const TaskItem = [
  {
    "id": 1,
        "title": "My portfolio django.",
        "subject": "Portfolio",
        "detail": "My portfolio django.",
        "done": false
  },
  {
    "id": 3,
        "title": "Re-build webdesign",
        "subject": "Webstore app",
        "detail": "re-build nokstore.",
        "done": false
  },
  {
    "id": 4,
        "title": "New TODO",
        "subject": "Woodo",
        "detail": "do Woodo stuff here!",
        "done": false
  },
];

function App() {

  return (
    <div className="App">
      <header className="App-header">
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
