import React, { useEffect } from 'react';
import GameScreen from './GameScreen/GameScreen';
import GameConsole from './GameConsole/GameConsole';
import './GameContainer.css';
import { Application } from '@splinetool/runtime';

function BackgroundGameContainer({ cornVal, setCornVal, cornValMod_Passive, cornValMod_Active }) {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/ZU-IAef1No3m9ff2/scene.splinecode');

    // Clean up the app when the component unmounts
    return () => {
      app.destroy();
    };
  }, []); // Empty dependency array to ensure this effect runs only once on mount

  return (
    <div>
      <canvas 
        id="canvas3d" 
        width={400} // Set the desired width
        height={300} // Set the desired height
        style={{ width: '100%', height: 'auto' }} // Maintain aspect ratio
      ></canvas> {/* The canvas element for the 3D content */}
      <GameScreen 
        cornVal={cornVal} 
        setCornVal={setCornVal} 
        cornValMod_Passive={cornValMod_Passive}
        cornValMod_Active={cornValMod_Active} />
      <GameConsole />
    </div>
  );
}

export default BackgroundGameContainer;
