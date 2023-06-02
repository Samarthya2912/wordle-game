import React, { useEffect, useState } from "react";
import "./GridRow.css";

interface GridRowProps {
  value: string | null;
  targetWord: string;
  activeAttempt: number;
  isActiveAttempt: boolean;
  setGuessAttempts: React.Dispatch<React.SetStateAction<(string | null)[]>>;
  setActiveAttempt: React.Dispatch<React.SetStateAction<number>>
}

const GridRow = ({ value, targetWord, setGuessAttempts, setActiveAttempt, activeAttempt, isActiveAttempt }: GridRowProps) => {
  const [attemptString, setAttemptString] = useState<string>(
    value ? value : " ".repeat(targetWord.length)
  );

  const [cursorIndex, setCursorIndex] = useState<number>(0);

  function handleKeydown(event: KeyboardEvent) {
    // console.log(event.key);

    if(event.key === "Enter") {
      if(cursorIndex < targetWord.length) return;

      setActiveAttempt(activeAttempt => activeAttempt+1)
      setGuessAttempts(guessAttempts => {
        let guessAttemptsCopy = [...guessAttempts];
        guessAttemptsCopy[activeAttempt] = attemptString;
        return guessAttemptsCopy;
      })
      if(targetWord === attemptString) alert("You won!!!")
    }
    else if(event.key === "Backspace") {
      if(cursorIndex === 0) return;

      setAttemptString(currState => currState.substring(0, cursorIndex-1) + ' ' + currState.substring(cursorIndex));
      setCursorIndex(index => index-1)
    }
    else if(event.key.length === 1 && event.key.match(/[a-z]/i) && cursorIndex < targetWord.length) {
      setAttemptString(currState => currState.substring(0, cursorIndex) + event.key + currState.substring(cursorIndex + event.key.length));
      setCursorIndex((index) => index + 1);
    }   
  }

  useEffect(() => {
    setAttemptString(value ? value : " ".repeat(targetWord.length));
  }, [value]);

  useEffect(() => {
    if (isActiveAttempt) {
      console.log("event listener addded");
      window.addEventListener("keydown", handleKeydown);
    }

    return () => {
      if (isActiveAttempt) {
        console.log("event listener removed");
        window.removeEventListener("keydown", handleKeydown);
      }
    };
  }, [isActiveAttempt, cursorIndex]);


  return (
    <div className="attempt-row">
      {attemptString.split("").map((char, index) => (
        <div
          className="attempt-row-cell"
          key={index}
          style={{ backgroundColor: isActiveAttempt || char === ' '? 
            "white"
            :
            (char.toUpperCase() === targetWord[index].toUpperCase()? "green":"red") 
          }}
        >
          {char}
        </div>
      ))}
    </div>
  );
};

export default GridRow;
