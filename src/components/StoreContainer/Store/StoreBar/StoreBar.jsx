import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function StoreBar({ setIsBuying, setBuyModifier }) {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    // Logic to handle different tab selections (if needed)
    switch(newValue) {
      case 0:
        setBuyModifier(1);
        break;
      case 1:
        setBuyModifier(5);
        break;
      case 2:
        setBuyModifier(10);
        break;
      default:
        setBuyModifier(1); // Default to 1 if unexpected value
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {/* <h3>Store Bar</h3> */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'inline-block' }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="Buy Multiplier Tabs"
        >
          <Tab label="x1" />
          <Tab label="x5" />
          <Tab label="x10" />
        </Tabs>
      </Box>
      <button onClick={() => setIsBuying(true)}>Buy</button>
      <button onClick={() => setIsBuying(false)}>Sell</button>
    </div>
  );
}

export default StoreBar;
