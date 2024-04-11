import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function ConsoleNav({ setDisplayState }) {
  const [alignment, setAlignment] = useState('web');

  const handleAlignmentChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      // You can perform any additional actions here based on the new alignment
    }
  };

  return (
    <div>
      <h3>Console Nav</h3>

      {/* ToggleButtonGroup example */}
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleAlignmentChange}
        aria-label="Platform"
      >
        <ToggleButton value="Settings" onClick={() => setDisplayState('Settings')}>Settings</ToggleButton>
        <ToggleButton value="Stats" onClick={() => setDisplayState('Stats')}>Stats</ToggleButton>
        <ToggleButton value="LeaderBoard" onClick={() => setDisplayState('LeaderBoard')}>Leader Board</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default ConsoleNav;
