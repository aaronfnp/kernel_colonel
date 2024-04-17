import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Import necessary components for theming
import './ConsoleNav.css';

function ConsoleNav({ setDisplayState }) {
  const [alignment, setAlignment] = useState('web');

  const handleAlignmentChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      // You can perform any additional actions here based on the new alignment
    }
  };

  // Define a custom theme with your desired button colors
  const theme = createTheme({
    palette: {
      primary: {
        main: '#879d1f', // Change the main color to your desired color
      },
    },
  });

  return (
    <div className='consoleNav'>
      {/* Apply the custom theme to the ToggleButtonGroup */}
      <ThemeProvider theme={theme}>
        <ToggleButtonGroup
          color="primary" // Use the primary color defined in the theme
          value={alignment}
          exclusive
          onChange={handleAlignmentChange}
          aria-label="Platform"
        >
          <ToggleButton value="Settings" onClick={() => setDisplayState('Settings')}>Settings</ToggleButton>
          <ToggleButton value="Stats" onClick={() => setDisplayState('Stats')}>Stats</ToggleButton>
          <ToggleButton value="LeaderBoard" onClick={() => setDisplayState('LeaderBoard')}>Leader Board</ToggleButton>
        </ToggleButtonGroup>
      </ThemeProvider>
    </div>
  );
}

export default ConsoleNav;
