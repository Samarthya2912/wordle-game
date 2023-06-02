import React from "react";
import "./App.css";
import WorldleGrid from "./components/WorldleGrid";

function App() {
  return (
    <div className="App">
      <h1>Wordle Game</h1>
      <WorldleGrid guessLimit={6} targetWord={"DEATH"} />
    </div>
  );
}

export default App;
