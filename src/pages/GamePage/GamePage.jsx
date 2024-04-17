import React, { useEffect, useState } from 'react';
import GameContainer from '../../components/GameContainer/GameContainer';
import StoreContainer from '../../components/StoreContainer/StoreContainer';
import './GamePage.css';
import { updateScore } from '../../utilities/users-api';
import SplineBackground from './SplineBackground'; // Import the SplineBackground component

function GamePage({ user, setUser }) {
  const [cornVal, setCornVal] = useState(user.score);
  const [totalCornVal, setTotalCornVal] = useState(user.totalScore);
  const [cornValMod_Passive, setCornValMod_Passive] = useState(0);
  const [cornValMod_Active, setCornValMod_Active] = useState(1);

  useEffect(() => {
    handleSaveScore(cornVal, totalCornVal);
  }, [cornVal, totalCornVal]);

  // useEffect(() => {
  //   // Initialize cornVal to the user's score on mount
  //   // setCornVal(user.score);
  //   // console.log("SetCornVal IN USEEFFECT", user.score)
    
  //   // Save score every 10 seconds
  //   const saveInterval = setInterval(() => {
  //     handleSaveScore();
  //   }, 10000);

  //   return () => clearInterval(saveInterval);

  // }, [user.score]);

  async function handleSaveScore(updatedCornVal, updatedTotalCornVal) {
    try {
      // Update score and totalScore
      await updateScore(user._id, updatedCornVal, updatedTotalCornVal);
      
      // Update user state
      setUser(prevUser => ({
        ...prevUser,
        score: updatedCornVal,
        totalScore: updatedTotalCornVal
      }));
    } catch (error) {
      console.error('Error updating score:', error);
    }
  }

  return (
    <div className='GamePage' style={{ height: '100vh' }}>
      <SplineBackground />
      <h1 className='Kernel'>Kernel Colonel</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='gameContainer'>
          <GameContainer 
            cornVal={cornVal} 
            setCornVal={setCornVal} 
            totalCornVal={totalCornVal}
            setTotalCornVal={setTotalCornVal}
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
            totalCornVal={totalCornVal}
            setTotalCornVal={setTotalCornVal}
            setCornValMod_Passive={setCornValMod_Passive}
            setCornValMod_Active={setCornValMod_Active}  
          />
        </div>
      </div>
      <button onClick={handleSaveScore}>Save Score</button>
    </div>
  );
}

export default GamePage;
