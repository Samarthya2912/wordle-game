import React, { ReactElement, useState } from "react";
import GridRow from "./GridRow";

interface WordleGridProps {
  guessLimit: number;
  targetWord: string;
}

const WorldleGrid = ({ guessLimit, targetWord }: WordleGridProps): ReactElement => {
  const [guessAttempts, setGuessAttempts] = useState<(string | null)[]>(
    new Array(guessLimit).fill(null)
  ); // null for left attempt
  const [activeAttempt, setActiveAttempt] = useState<number>(0);

  return (
    <div className="wordle-grid-wrapper">
      <h3>Worlde Grid</h3>
      {guessAttempts.map((row, index) => (
        <GridRow
          value={row}
          key={index}
          targetWord={targetWord}
          activeAttempt={activeAttempt}
          isActiveAttempt={activeAttempt === index}
          setGuessAttempts={setGuessAttempts}
          setActiveAttempt={setActiveAttempt}
        />
      ))}
    </div>
  );
};

export default WorldleGrid;
