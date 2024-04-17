import React, { useState, useEffect, useRef } from 'react';
import { upgradesIndex } from '../../../../utilities/upgrades-api';
import StoreButton from '../StoreButtonList/StoreButton/StoreButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; // Import Button from MUI
import './StoreButtonList.css';

function StoreButtonList({ cornVal, setCornVal, totalCornVal, setTotalCornVal, setCornValMod_Passive, setCornValMod_Active, isBuying, buyModifier, quantity, user, setUser }) {
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
      setCornVal(secs => {
        const newValue = secs + passiveModifier;
        return parseFloat(newValue.toFixed(2));
      });
      setTotalCornVal(secs => {
        const newValue = secs + passiveModifier;
        return parseFloat(newValue.toFixed(2));
      });
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
      <h3>StoreButtonList</h3>
      <div className="storeButtonListContainer">
        {upgradesList.map((upgrade, idx) => (
                  <StoreButton 
                  key={idx} 
                  id={upgrade._id} 
                  name={upgrade.name} 
                  description={upgrade.description} 
                  quantity={upgrade.quantity} 
                  price={upgrade.price} 
                  productionRate={upgrade.productionRate} 
                  isPassive={upgrade.isPassive} 
                  img={upgrade.img} 
                  cornVal={cornVal}
                  setCornVal={setCornVal}
                  buyModifier={buyModifier}
                  setActiveModifier={setActiveModifier}
                  activeModifier={activeModifier}
                  passiveModifier={passiveModifier}
                  setPassiveModifier={setPassiveModifier}
                  setCornValMod_Passive={setCornValMod_Passive}
                  setCornValMod_Active={setCornValMod_Active}
                  user={user}
                  setUser={setUser}
                  />
              ))}
        </div>
    </div>
  );
}

export default StoreButtonList;
