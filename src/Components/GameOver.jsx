import React, { useContext } from 'react'

import { AppContext } from '../App'

function GameOver() {
    const {gameOver, setGameOver, correctWord} = useContext(AppContext)

  return (
    <div className='gameOver flex justify-around flex-col text-white text-4xl absolute w-80 h-80 border-1 bg-gradient-to-r from-pink-500 to-yellow-500 bottom-2/4 drop-shadow-sm text white justify-center items-center'>
        <h3>{gameOver.guessedWord ? "You won, congrats!" : "You failed miserably"}</h3>
        
        <h1 >The solution is {correctWord}</h1>
    </div>
  )
}

export default GameOver