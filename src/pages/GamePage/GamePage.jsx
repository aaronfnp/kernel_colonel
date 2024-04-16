import React, { useEffect, useState } from 'react';
import GameContainer from '../../components/GameContainer/GameContainer';
import StoreContainer from '../../components/StoreContainer/StoreContainer';
import './GamePage.css';
import { updateScore, updateUserQty } from '../../utilities/users-api';
import SplineBackground from './SplineBackground'; // Import the SplineBackground component
import { updateTypeQueryNode } from 'typescript';

function GamePage({ user, setUser }) {
  const [cornVal, setCornVal] = useState(user.score);
  const [totalCornVal, setTotalCornVal] = useState(user.totalScore);
  const [cornValMod_Passive, setCornValMod_Passive] = useState(0);
  const [cornValMod_Active, setCornValMod_Active] = useState(1);
  const [userQty, setUserQty] = useState(user.upgrades);
  const [quantity, setQuantity] = useState(props.quantity);
  

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
      handleUserQty();
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
    }}

    async function handleUserQty() {
      try {
        await updateUserQty(user._id, userQty);
  
        setUserQty(prevUserQty => {
          setUser(prevUser => ({
            ...prevUser,
            quantity: prevUserQty
          }));
          console.log(`Updated quantity to ${prevUserQty}`);
          return prevUserQty;
        });
      } catch (error) {
        console.error('Error updating quantity:', error);
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
            userQty={userQty}
            setUserQty={setUserQty}
              />
        </div>
      </div>
      <button onClick={[
        handleSaveScore,
        handleUserQty
        ]}>Save</button>
    </div>
  );
}


export default GamePage;
