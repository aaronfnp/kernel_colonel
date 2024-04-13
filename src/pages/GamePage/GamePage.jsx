import React, { useEffect, useState } from 'react';
import GameContainer from '../../components/GameContainer/GameContainer';
import StoreContainer from '../../components/StoreContainer/StoreContainer';
import './GamePage.css';
import { updateScore } from '../../utilities/users-api';
import SplineBackground from './SplineBackground'; // Import the SplineBackground component

function GamePage({ user, setUser }) {
  const [cornVal, setCornVal] = useState(0);
  const [cornValMod_Passive, setCornValMod_Passive] = useState(0);
  const [cornValMod_Active, setCornValMod_Active] = useState(1);

  // Initialize cornVal to the user's score on mount
  useEffect(() => {
    const initialize = async () => {
      try {
        setCornVal(user.score);
      } catch (error) {
        console.error('Error initializing:', error);
      }
    };
    initialize();
  }, [user.score]);

  // Function to handle saving score
  async function handleSaveScore() {
    try {
      await updateScore(user._id, cornVal);

      setUser(prevUser => ({
        ...prevUser,
        score: cornVal
      }));

      console.log(`Updated Score to ${cornVal}`);
      console.log(user); // Ensure user is updated
    } catch (error) {
      console.error('Error updating score:', error);
    }
  }

  return (
    <div className='GamePage'>
      <SplineBackground /> {/* Include the SplineBackground component */}
      <h1>GamePage</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='gameContainer'>
          <GameContainer 
            cornVal={cornVal} 
            setCornVal={setCornVal} 
            cornValMod_Passive={cornValMod_Passive}
            cornValMod_Active={cornValMod_Active}
            user={user}
            setUser={setUser}
            />
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
  );
}

export default GamePage;
