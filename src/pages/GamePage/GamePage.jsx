import React from 'react'
import GameContainer from '../../components/GameContainer/GameContainer'
import StoreContainer from '../../components/StoreContainer/StoreContainer'

function GamePage() {
  return (
    <div>
      <h1>GamePage</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='gameContainer'>
          <GameContainer  />
        </div>
        <div className='storeContainer'>
          <StoreContainer  />
        </div>
      </div>
    </div>
  )
}

export default GamePage
