import React from 'react'
import GameScreen from './GameScreen/GameScreen'
import GameConsole from './GameConsole/GameConsole'
import './GameContainer.css'

function GameContainer({cornVal, setCornVal, cornValMod_Passive, cornValMod_Active}) {
  return (
    <div>
      <h1>GameContainer</h1>
      <GameScreen 
        cornVal={cornVal} 
        setCornVal={setCornVal} 
        cornValMod_Passive={cornValMod_Passive}
        cornValMod_Active={cornValMod_Active} />
      <GameConsole />
    </div>
  )
}

export default GameContainer
