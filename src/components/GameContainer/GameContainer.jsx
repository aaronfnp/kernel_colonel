<<<<<<< HEAD
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
=======
import React from 'react'
import GameScreen from './GameScreen/GameScreen'
import GameConsole from './GameConsole/GameConsole'
import './GameContainer.css'

function GameContainer({cornVal, setCornVal, totalCornVal, setTotalCornVal, cornValMod_Passive, cornValMod_Active, user, setUser}) {
  return (
    <div>
      <h1>GameContainer</h1>
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
>>>>>>> 5197e5ba8c538bf8d9dc370f928a8aa8b810a506
