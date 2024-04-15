<<<<<<< HEAD
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
=======
import React from 'react'
import ConsoleDisplay from './ConsoleDisplay/ConsoleDisplay'
import ConsoleNav from './ConsoleNav/ConsoleNav'
import { useState } from 'react'

function GameConsole({user, setUser}) {
  const [displayState, setDisplayState] = useState('Stats');
  return (
    <div>
      {/* <h2>GameConsole</h2> */}
      <ConsoleDisplay displayState={displayState} user={user} setUser={setUser}/>
      <ConsoleNav setDisplayState={setDisplayState}/>
    </div>
  )
}

export default GameConsole
>>>>>>> 5197e5ba8c538bf8d9dc370f928a8aa8b810a506
