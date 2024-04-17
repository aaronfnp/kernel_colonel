import React, { useState, useEffect, useRef } from 'react';
import { upgradesIndex } from '../../../../utilities/upgrades-api';
import StoreButton from './StoreButton/StoreButton';
import './StoreButtonList.css';
import PropTypes from 'prop-types';  

function StoreButtonList({
  cornVal, setCornVal, totalCornVal, setTotalCornVal,
  passiveModifier, setPassiveModifier, buyModifier, isBuying
}) {
  const [upgradesList, setUpgradesList] = useState([]);
  const timerRef = useRef();

  useEffect(() => {
    const fetchUpgrades = async () => {
      const upgrades = await upgradesIndex();
      setUpgradesList(upgrades);
    };
    fetchUpgrades();
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCornVal(c => c + passiveModifier);
      setTotalCornVal(c => c + passiveModifier);
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [setCornVal, setTotalCornVal, passiveModifier]);

  return (
    <div className="storeButtonList">
      <h3>StoreButtonList</h3>
      <div className="storeButtonListContainer">
        {upgradesList.map((upgrade) => (
          <StoreButton 
            key={upgrade._id}  // Use unique id for key instead of index
            upgrade={upgrade}
            cornVal={cornVal}
            setCornVal={setCornVal}
            buyModifier={buyModifier}
            setActiveModifier={setPassiveModifier}
            setPassiveModifier={setPassiveModifier}
            isPassive={upgrade.isPassive}
          />
        ))}
      </div>
    </div>
  );
}

StoreButtonList.propTypes = {
  cornVal: PropTypes.number.isRequired,
  setCornVal: PropTypes.func.isRequired,
  totalCornVal: PropTypes.number.isRequired,
  setTotalCornVal: PropTypes.func.isRequired,
  passiveModifier: PropTypes.number.isRequired,
  setPassiveModifier: PropTypes.func.isRequired,
  buyModifier: PropTypes.number.isRequired,
  isBuying: PropTypes.bool.isRequired,
};

export default StoreButtonList;
