import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { board, correctWord, currentAttempt, setDisabledLetters, disabledLetters } = useContext(AppContext);

  const letter = board[attemptVal][letterPos];

  const correct = correctWord[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);

  const letterState =
    currentAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

    useEffect(() => {
      if(!correctWord.includes(letter)) {
        setDisabledLetters(prev => [...prev, letter])
       
      }
    }, [currentAttempt.attempt])
  return (
    <div
      className="h-16 w-16 border-2 flex justify-center items-center"
      id={letterState}
    >
      {letter}
    </div>
  );
}

export default Letter;
