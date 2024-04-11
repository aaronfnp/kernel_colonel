import React from 'react'

function ConsoleNav({ setDisplayState }) {
  return (
    <div>
      <h3>Console Nav</h3>
      <button onClick={() => setDisplayState('Settings')}>Settings</button>
      <button onClick={() => setDisplayState('Stats')}>Stats</button>
      <button onClick={() => setDisplayState('LeaderBoard')}>Leader Board</button>
    </div>
  )
}

export default ConsoleNav