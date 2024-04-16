import React, {useState, useEffect, useRef} from 'react';
import { upgradesIndex } from '../../../../utilities/upgrades-api';
import StoreButton from '../StoreButtonList/StoreButton/StoreButton'

function StoreButtonList({cornVal, setCornVal, totalCornVal, setTotalCornVal, setCornValMod_Passive, setCornValMod_Active, isBuying, buyModifier}) {
  const [passiveModifier, setPassiveModifier] = useState(0);
  const [activeModifier, setActiveModifier] = useState(1);
  const [upgradesList, setUpgradesList] = useState([]);
  const timerRef = useRef();

  // FETCHING ALL OF THE CURRENT UPGRADES
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
  
  // TIMER BASED CPS USE EFFECT
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCornVal(secs => secs + passiveModifier);
      setTotalCornVal(secs => secs + passiveModifier);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [passiveModifier, setCornVal]);

  const setCPS = (newScoreModifier) => {
    setCornValMod_Passive(Math.floor(newScoreModifier * 1000) / 1000);
  };

  const addPassiveModifier = (modifierValue) => {
    setPassiveModifier(prevModifier => {
      const newModifier = prevModifier + modifierValue;
      setCPS(newModifier);
      return newModifier;
    });
  };

  

  return (

    // WILL CHANGE THIS TO AN ARRAY OF UPGRADES, INTO A StoreButton COMPONENT
    <div>
      <h3>StoreButtonList</h3>
      {/* CPS BUTTONS */}
      <button onClick={() => addPassiveModifier(1)}>Upgrade + 1 CPS</button>
      <button onClick={() => addPassiveModifier(2)}>Upgrade + 2 CPS</button>
      <button onClick={() => addPassiveModifier(5)}>Upgrade + 5 CPS</button>
      {/* CLICK MODIFIER BUTTONS */}
        <button onClick={() => addActiveModifier(1)}>Upgrade + 1 Click</button>
      {/* TEST FOR BUYING  */}
        <button onClick={() => {
          if (cornVal >= 20) {
            setCornVal(cornVal - 20);
          } else {
            alert("Not enough corn!");
          }
        }}>COST 20 CORN</button>
    </div>
  )};





export default StoreButtonList;
