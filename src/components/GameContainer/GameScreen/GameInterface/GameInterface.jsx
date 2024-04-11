import React from 'react'

function GameInterface({cornVal, setCornVal, cornValMod_Passive, cornValMod_Active }) {
  
  function clickCorn() {

  }

  
  return (
    <div>
        <h3>Total Corn = {cornVal}</h3>
        <h4>Corn Per Second = {cornValMod_Passive}</h4>
        <h4>Corn Per Click = {cornValMod_Active}</h4>
      <button onClick={() => setCornVal(cornVal+cornValMod_Active)}>CLICK</button>
    </div>
  )
}

export default GameInterface
