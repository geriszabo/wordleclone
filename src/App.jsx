import "./App.css";
import Board from "./Components/Board";
import KeyBoard from "./Components/Keyboard";
import GameOver from "./Components/GameOver";
import { boardDefault, generateWordset } from "./Components/Words";
import { useState, useEffect, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [keyUp, setKeyUp] = useState("");
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  });
  const [wordset, setWordset] = useState(new Set())
  const [disabledLetters, setDisabledLetters] = useState([])
  const [gameOver, setGameOver] = useState({gameOver: false, guessedWord: false})

  const correctWord = "RIGHT"

  useEffect(() => {
   generateWordset().then(words => {
     setWordset(words.wordSet)
   })
  }, []);

  const onSelectLetter = (keyVal) => {
    if (currentAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos + 1,
    });
  };
  const onDeleteLetter = () => {
    if (currentAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos - 1,
    });
  };
  const onEnter = () => {
    if (currentAttempt.letterPos !== 5) return;
    let currWord = ""
    for(let i = 0; i < 5; i++) {
      currWord += board[currentAttempt.attempt][i]
    }
    if(wordset.has(currWord.toLowerCase())) {
      setCurrentAttempt({attempt: currentAttempt.attempt+1, letterPos: 0})
    } else{
      alert("Word not found")
    }
    if(currWord === correctWord) {
      setGameOver({gameOver: true, guessedWord: true})
      return
    }
    if(currentAttempt.attempt === 5) {
      setGameOver({gameOver: true, guessedWord: false})
    }
  };

  return (
    <div className="App h-screen w-screen flex flex-col items-center justify-between">
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          onEnter,
          onDeleteLetter,
          onSelectLetter,
          correctWord,
          setDisabledLetters,
          disabledLetters,
          gameOver,
          setGameOver
        }}
      >
        <Board></Board>
        {gameOver.gameOver ? <GameOver></GameOver> : <KeyBoard></KeyBoard>}
      </AppContext.Provider>
    </div>
  );
}

export default App;
