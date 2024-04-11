import React, { useState } from 'react'
import GameContainer from '../../components/GameContainer/GameContainer'
import StoreContainer from '../../components/StoreContainer/StoreContainer'
import './GamePage.css'

function GamePage() {
  const [cornVal, setCornVal] = useState(0);
  const [cornValMod_Passive, setCornValMod_Passive] = useState(0);
  const [cornValMod_Active, setCornValMod_Active] = useState(1);
  return (
    <div className='GamePage'>
      <h1>GamePage</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='gameContainer'>
          <GameContainer 
          cornVal={cornVal} 
          setCornVal={setCornVal} 
          cornValMod_Passive={cornValMod_Passive}
          cornValMod_Active={cornValMod_Active} />
        </div>
        <div className='storeContainer'>
          <StoreContainer 
          cornVal={cornVal} 
          setCornVal={setCornVal}
          setCornValMod_Passive={setCornValMod_Passive}
          setCornValMod_Active={setCornValMod_Active}  />
        </div>
      </div>
    </div>
  )
}

export default GamePage
