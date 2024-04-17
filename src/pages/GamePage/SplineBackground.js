import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const SplineBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/fzUoz2VUidw2IaxW/scene.splinecode');

    return () => {
      // Clean up code if needed
    };
  }, []);

  return (
    <canvas
      id="canvas3d"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%', // Take up full width of the viewport
        height: '100vh', // Take up full height of the viewport
      }}
    />
  );
};

export default SplineBackground;
