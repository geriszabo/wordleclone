import React, { useContext } from 'react'

import { AppContext } from '../App'

function GameOver() {
    const {gameOver, setGameOver, correctWord} = useContext(AppContext)

  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord ? "You won, congrats" : "You failed miserably"}</h3>
        <h1>The solution is {correctWord}</h1>
    </div>
  )
}

export default GameOver