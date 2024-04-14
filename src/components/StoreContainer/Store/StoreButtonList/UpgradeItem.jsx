import React from 'react';

function UpgradeItem({ upgrade }) {
  const { name, level, price, productionRate, effect } = upgrade;

  return (
    <div>
      <h4>{name}</h4>
      <p>Level: {level}</p> 
      <p>Price: {price} corn</p>
      <p>Production Rate: {productionRate}</p>
      <p>Effect: {effect}</p>
    </div>
  );
}

export default UpgradeItem;