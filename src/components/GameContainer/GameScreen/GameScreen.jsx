import React from 'react';
import './Font.css'; // Import your CSS file containing font styles
import GameInterface from './GameInterface/GameInterface';
import './GameScreen.css';

function GameScreen({ cornVal, setCornVal, totalCornVal, setTotalCornVal, cornValMod_Passive, cornValMod_Active }) {
  return (
    <div className='game-screen'>
      {/* Apply the CSS class to the <h2> element */}
      <h2 className="mochiy-pop-one">Kernel Rations</h2>
      <GameInterface 
        cornVal={cornVal} 
        setCornVal={setCornVal} 
        totalCornVal={totalCornVal}
        setTotalCornVal={setTotalCornVal}
        cornValMod_Passive={cornValMod_Passive}
        cornValMod_Active={cornValMod_Active} 
      />
    </div>
  );
}

export default GameScreen;
