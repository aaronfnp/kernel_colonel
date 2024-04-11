import React from 'react';
import Chip from '@mui/material/Chip';

function GameInterface({ cornVal, setCornVal, cornValMod_Passive, cornValMod_Active }) {

  function clickCorn() {
    // Functionality for clicking corn
  }

  return (
    <div>
      {/* Chips for displaying values */}
      <Chip className='cornStats' label={`Total Corn = ${cornVal}`} /><br></br>
      <Chip className='cornStats' label={`Corn Per Second = ${cornValMod_Passive}`} /><br></br>
      <Chip className='cornStats' label={`Corn Per Click = ${cornValMod_Active}`} /><br></br>
      <div>
      {/* Button for clicking */}
      <button onClick={() => setCornVal(cornVal + cornValMod_Active)}>CLICK</button>
      </div>
    </div>
  )
}

export default GameInterface;
