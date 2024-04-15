import React from 'react';

function UpgradeItem({ upgrade }) {
  const { name, level, productionRate, effect } = upgrade;

  return (
    <div className="upgrade-item">
      <div className="upgrade-header">
        <h4>{name}</h4>
        <p className="level">Level: {level}</p>
      </div>
      <div className='upgrade-body'>
      <p>Production Rate: {productionRate}</p>
      <p className='effect'>Effect: {effect}</p>
      </div>
    </div>
  );
}

export default UpgradeItem;