import React from 'react'
import GameScreen from './GameScreen/GameScreen'
import GameConsole from './GameConsole/GameConsole'

function GameContainer() {
  return (
    <div>
      <h1>GameContainer</h1>
      <GameScreen />
      <GameConsole />
    </div>
  )
}

export default GameContainer
