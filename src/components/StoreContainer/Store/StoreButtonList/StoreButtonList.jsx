import React, {useState, useEffect, useRef} from 'react';
import { upgradesIndex } from '../../../../utilities/upgrades-api';
import StoreButton from '../StoreButtonList/StoreButton/StoreButton'

function StoreButtonList({cornVal, setCornVal, totalCornVal, setTotalCornVal, setCornValMod_Passive, setCornValMod_Active, isBuying, buyModifier}) {
  const [passiveModifier, setPassiveModifier] = useState(0);
  // STARTING VAL BE SAME AS GAMEPAGE VAL FOR CornValMod_Active 
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


  

  return (

    // WILL CHANGE THIS TO AN ARRAY OF UPGRADES, INTO A StoreButton COMPONENT
    <div>
      <h3>StoreButtonList</h3>
      {/* CPS BUTTONS */}
      <div>
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
                  />
              ))}
        </div>
    </div>
  );
}

export default StoreButtonList;