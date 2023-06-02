import React from "react";
import "./App.css";
import WorldleGrid from "./components/WorldleGrid";
import getRandomWord from "./functions/getRandomWords";

function App() {
  return (
    <div className="App">
      <h1>Wordle Game</h1>
      <WorldleGrid guessLimit={6} targetWord={getRandomWord()} />
    </div>
  );
}

export default App;
