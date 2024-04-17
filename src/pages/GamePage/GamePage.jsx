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

    // CURRENTLY SAVES EVERY 10 SECS
    // NEED TO CHANGE TO IF VALUE IS !== 
    const saveInterval = setInterval(() => {
      handleSaveScore();
    }, 10000);

    return () => clearInterval(saveInterval);

  }, [user.score]);

  // Function to handle saving score
  async function handleSaveScore() {
    try {
      // Update both score and totalScore
      await updateScore(user._id, cornVal, totalCornVal);
      
      // Update local state
      setCornVal(prevCornVal => {
        setUser(prevUser => ({
          ...prevUser,
          score: prevCornVal
        }));
        console.log(`Updated Score to ${prevCornVal}`);
        return prevCornVal;
      });
  
      setTotalCornVal(prevTotalCornVal => {
        setUser(prevUser => ({
          ...prevUser,
          totalScore: prevTotalCornVal
        }));
        console.log(`Updated Total Score to ${prevTotalCornVal}`);
        return prevTotalCornVal;
      });
    } catch (error) {
      console.error('Error updating score:', error);
    }
  }

  return (
    <div className='GamePage' style={{ height: '100vh' }}> {/* Set the height to 100vh */}
      <SplineBackground /> {/* Include the SplineBackground component */}
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
