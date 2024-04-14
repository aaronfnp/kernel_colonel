import React from 'react'
import ConsoleDisplay from './ConsoleDisplay/ConsoleDisplay'
import ConsoleNav from './ConsoleNav/ConsoleNav'
import { useState } from 'react'

function GameConsole() {
  const [displayState, setDisplayState] = useState('Stats');
  return (
    <div>
      {/* <h2>GameConsole</h2> */}
      <ConsoleDisplay displayState={displayState} />
      <ConsoleNav setDisplayState={setDisplayState}/>
    </div>
  )
}

export default GameConsole
