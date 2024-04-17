import React, { useState, useEffect, useRef } from 'react';
import { upgradesIndex } from '../../../../utilities/upgrades-api';
import StoreButton from '../StoreButtonList/StoreButton/StoreButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function StoreButtonList({
  cornVal,
  setCornVal,
  totalCornVal,
  setTotalCornVal,
  setCornValMod_Passive,
  setCornValMod_Active,
  isBuying,
  buyModifier
}) {
  const [passiveModifier, setPassiveModifier] = useState(0);
  const [activeModifier, setActiveModifier] = useState(1);
  const [upgradesList, setUpgradesList] = useState([]);
  const [canAffordUpgrades, setCanAffordUpgrades] = useState(false);
  const timerRef = useRef();

  useEffect(() => {
    const fetchUpgrades = async () => {
      try {
        const upgrades = await upgradesIndex();
        setUpgradesList(upgrades);
      } catch (error) {
        console.error('Error fetching upgrades:', error);
      }
    };

    fetchUpgrades();
  }, []);

  // Check if the user can afford any upgrades
  useEffect(() => {
    checkCanAffordUpgrades();
  }, [cornVal, upgradesList]);

  const checkCanAffordUpgrades = () => {
    for (const upgrade of upgradesList) {
      if (cornVal >= upgrade.price) {
        setCanAffordUpgrades(true);
        return;
      }
    }
    setCanAffordUpgrades(false);
  };

  // Buy upgrade logic
  const handleBuyUpgrade = (price, productionRate, isPassive) => {
    if (cornVal >= price) {
      setCornVal(cornVal - price);
      if (isPassive) {
        setCornValMod_Passive(prev => prev + productionRate);
      } else {
        setCornValMod_Active(prev => prev + productionRate);
      }
    } else {
      alert('Not enough corn to buy this upgrade.');
    }
  };

  // Render upgrades only if they can be afforded for the first time
  return (
    <div>
      <h3>StoreButtonList</h3>
      <div>
        {canAffordUpgrades ? (
          upgradesList.map((upgrade, idx) => (
            <Card key={idx} style={{ margin: '10px' }}>
              <CardContent>
                <StoreButton
                  {...upgrade}
                  handleBuyUpgrade={handleBuyUpgrade}
                  cornVal={cornVal}
                />
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No upgrades available yet.</p>
        )}
      </div>
    </div>
  );
}

export default StoreButtonList;