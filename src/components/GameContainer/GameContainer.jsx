import React from 'react'
import GameScreen from './GameScreen/GameScreen'
import GameConsole from './GameConsole/GameConsole'
import './GameContainer.css'

function GameContainer({cornVal, setCornVal, totalCornVal, setTotalCornVal, cornValMod_Passive, cornValMod_Active, user, setUser}) {
  return (
    <div className='GameContainer'>
      <h1>Click Me</h1>
      <GameScreen 
        cornVal={cornVal} 
        setCornVal={setCornVal} 
        totalCornVal={totalCornVal}
        setTotalCornVal={setTotalCornVal}
        cornValMod_Passive={cornValMod_Passive}
        cornValMod_Active={cornValMod_Active} />
      <GameConsole user={user} setUser={setUser}/>
    </div>
  )
}

export default GameContainer
