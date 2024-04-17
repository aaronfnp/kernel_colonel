import React, { useEffect, useState } from 'react';
import GameContainer from '../../components/GameContainer/GameContainer';
import StoreContainer from '../../components/StoreContainer/StoreContainer';
import './GamePage.css';
import { updateScore } from '../../utilities/users-api';
import SplineBackground from './SplineBackground';
import PropTypes from 'prop-types';  // Import PropTypes

function GamePage({ user, setUser }) {
  const [cornVal, setCornVal] = useState(user.score);
  const [totalCornVal, setTotalCornVal] = useState(user.totalScore);
  const [cornValMod_Passive, setCornValMod_Passive] = useState(0);
  const [cornValMod_Active, setCornValMod_Active] = useState(1);

  useEffect(() => {
    setCornVal(user.score);
    const saveInterval = setInterval(() => {
      handleSaveScore();
    }, 10000);
    return () => clearInterval(saveInterval);
  }, [user.score, handleSaveScore]);  // Corrected dependencies

  async function handleSaveScore() {
    await updateScore(user._id, cornVal, totalCornVal);
    setCornVal(prev => {
      setUser({...user, score: prev});
      return prev;
    });
    setTotalCornVal(prev => {
      setUser({...user, totalScore: prev});
      return prev;
    });
  }

  return (
    <div className='GamePage'>
      <SplineBackground />
      <h1 className='Kernel'>Kernel Colonel</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <GameContainer {...{cornVal, setCornVal, totalCornVal, setTotalCornVal, cornValMod_Passive, cornValMod_Active, user, setUser}} />
        <StoreContainer {...{cornVal, setCornVal, totalCornVal, setTotalCornVal, setCornValMod_Passive, setCornValMod_Active, user, setUser}} />
      </div>
      <button onClick={handleSaveScore}>Save</button>
    </div>
  );
}

GamePage.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    score: PropTypes.number,
    totalScore: PropTypes.number
  }).isRequired,
  setUser: PropTypes.func.isRequired,
};

export default GamePage;
