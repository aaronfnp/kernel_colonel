import React from 'react'
import GameInterface from './GameInterface/GameInterface'

function GameScreen({cornVal, setCornVal, cornValMod_Passive, cornValMod_Active}) {
  return (
    <div>
      <h2>GameScreen</h2>
      <GameInterface 
      cornVal={cornVal} 
      setCornVal={setCornVal} 
      cornValMod_Passive={cornValMod_Passive}
      cornValMod_Active={cornValMod_Active} />
    </div>
  )
}

export default GameScreen
