import React from 'react';
import './Font.css'; // Import your CSS file containing font styles
import GameInterface from './GameInterface/GameInterface';
import './GameScreen.css';

function GameScreen({ cornVal, setCornVal, cornValMod_Passive, cornValMod_Active }) {
  return (
    <div className='corn-click'>
      {/* Apply the CSS class to the <h2> element */}
      <h2 className="mochiy-pop-one">Kernel Count</h2>
      <GameInterface 
        cornVal={cornVal} 
        setCornVal={setCornVal} 
        cornValMod_Passive={cornValMod_Passive}
        cornValMod_Active={cornValMod_Active} 
      />
    </div>
  );
}

export default GameScreen;
