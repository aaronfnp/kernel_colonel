import React, { useState, useEffect, useRef } from 'react';
import { upgradesIndex } from '../../../../utilities/upgrades-api';
import StoreButton from '../StoreButtonList/StoreButton/StoreButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; // Import Button from MUI
import './StoreButtonList.css';

function StoreButtonList({ cornVal, setCornVal, totalCornVal, setTotalCornVal, setCornValMod_Passive, setCornValMod_Active, isBuying, buyModifier }) {
  const [passiveModifier, setPassiveModifier] = useState(0);
  const [activeModifier, setActiveModifier] = useState(1);
  const [upgradesList, setUpgradesList] = useState([]);
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

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCornVal(secs => secs + passiveModifier);
      setTotalCornVal(secs => secs + passiveModifier);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [passiveModifier, setCornVal]);

  const handleBuy = (upgrade) => {
    if (cornVal >= upgrade.price * buyModifier) {
      setCornVal(cornVal - upgrade.price * buyModifier);
      if (upgrade.isPassive) {
        setCornValMod_Passive(prevModifier => prevModifier + upgrade.productionRate * buyModifier);
      } else {
        setCornValMod_Active(prevModifier => prevModifier + upgrade.productionRate * buyModifier);
      }
    } else {
      alert('Not enough corn!');
    }
  };

  return (
    <div className="storeButtonList">
      <h3>Upgrades</h3>
      <div className="storeButtonListContainer">
        {upgradesList.map((upgrade, idx) => (
          <Card key={idx} className="upgradeCard">
            <CardContent className="upgradeCardContent">
              <div className="upgradeImage">
                <img src={upgrade.img} alt={upgrade.name} />
              </div>
              <div className="upgradeDetails">
                <Typography variant="h6" component="h2">{upgrade.name}</Typography>
                <Typography variant="body2" component="p">{upgrade.description}</Typography>
                <Typography variant="body2" component="p">Cost: {upgrade.price}</Typography>
                <Typography variant="body2" component="p">Production Rate: {upgrade.productionRate}</Typography>
              </div>
              <div className="upgradeActions">
                <Button variant="contained" className="buyButton" onClick={() => handleBuy(upgrade)}>Buy</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default StoreButtonList;
