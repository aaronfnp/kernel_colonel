<<<<<<< HEAD
import React from 'react';
import Chip from '@mui/material/Chip';
import './GameInterface.css'; // Import CSS file

function GameInterface({ cornVal, setCornVal, cornValMod_Passive, cornValMod_Active }) {

  function popcornAnimation() {
    // Calculate random coordinates across the entire page
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);

    // Create a new popcorn element
    const popcorn = document.createElement('div');
    popcorn.classList.add('popcorn');

    // Set the position of the popcorn element
    popcorn.style.left = `${randomX}px`;
    popcorn.style.top = `${randomY}px`;

    // Append the popcorn element to the body
    document.body.appendChild(popcorn);

    // Remove the popcorn element after a delay
    setTimeout(() => {
      popcorn.remove();
    }, 2000); // Change 2000 to adjust the duration of the animation
  }

  return (
    <div>
      {/* Chips for displaying values */}
      <Chip className='cornStats' label={`Total Corn = ${cornVal}`} /><br></br>
      <Chip className='cornStats' label={`Corn Per Second = ${cornValMod_Passive}`} /><br></br>
      <Chip className='cornStats' label={`Corn Per Click = ${cornValMod_Active}`} /><br></br>
      
      {/* Container for popcorn animation */}
      <div id="popcorn-container"></div>
      
      <div>
        {/* Button for clicking */}
        <button className="custom-button" onClick={() => { setCornVal(cornVal + cornValMod_Active); popcornAnimation(); }}>CLICK</button>
      </div>
    </div>
  )
}

export default GameInterface;
=======
import React from 'react';
import Chip from '@mui/material/Chip';
import './GameInterface.css'; // Import CSS file

function GameInterface({ cornVal, setCornVal, totalCornVal, setTotalCornVal, cornValMod_Passive, cornValMod_Active }) {

  function popcornAnimation() {
    // Calculate random coordinates across the entire page
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);

    // Create a new popcorn element
    const popcorn = document.createElement('div');
    popcorn.classList.add('popcorn');

    // Set the position of the popcorn element
    popcorn.style.left = `${randomX}px`;
    popcorn.style.top = `${randomY}px`;

    // Append the popcorn element to the body
    document.body.appendChild(popcorn);

    // Remove the popcorn element after a delay
    setTimeout(() => {
      popcorn.remove();
    }, 2000); // Change 2000 to adjust the duration of the animation
  }

  return (
    <div>
      {/* Chips for displaying values */}
      <Chip className='cornStats' label={`Total Corn = ${cornVal}`} /><br></br>
      <Chip className='cornStats' label={`Corn Per Second = ${cornValMod_Passive}`} /><br></br>
      <Chip className='cornStats' label={`Corn Per Click = ${cornValMod_Active}`} /><br></br>
      
      {/* Container for popcorn animation */}
      <div id="popcorn-container"></div>
      
      <div>
        {/* Button for clicking */}
        <button className="custom-button" onClick={() => { setCornVal(cornVal + cornValMod_Active); setTotalCornVal(totalCornVal + cornValMod_Active); popcornAnimation(); }}>CLICK</button>
      </div>
    </div>
  )
}

export default GameInterface;
>>>>>>> 5197e5ba8c538bf8d9dc370f928a8aa8b810a506
