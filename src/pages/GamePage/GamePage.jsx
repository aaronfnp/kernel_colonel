import React, { useEffect, useState } from 'react'
import GameContainer from '../../components/GameContainer/GameContainer'
import StoreContainer from '../../components/StoreContainer/StoreContainer'
import './GamePage.css'
import { updateScore } from '../../utilities/users-api';

function GamePage({user, setUser}) {
  const [cornVal, setCornVal] = useState(0);
  const [cornValMod_Passive, setCornValMod_Passive] = useState(0);
  const [cornValMod_Active, setCornValMod_Active] = useState(1);

  // CURRENTLY INTIALIZES BACK TO THE INTIAL MOUNTED USER SCORE ON REFRESH
  useEffect(() => {
    const initialize = async () => {
        try {
            setCornVal(user.score)
        } catch (error) {
            console.error('Error initializing:', error);
        }
    };
    initialize();
}, []);

async function handleSaveScore() {
  try {
    await updateScore(user._id, cornVal);
    
    setUser(prevUser => ({
      ...prevUser,
      score: cornVal
    }));

    console.log(`Updated Score to ${cornVal}`);
    await console.log(user)
  } catch (error) {
    console.error('Error updating score:', error);
  }
}


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
      <button onClick={handleSaveScore}>Save Score</button>
    </div>
  )
}

export default GamePage
