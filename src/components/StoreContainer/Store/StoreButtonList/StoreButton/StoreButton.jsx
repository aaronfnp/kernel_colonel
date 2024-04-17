import React from 'react';
import './StoreButton.css';

function StoreButton(props) {
  let modifierType = props.isPassive ? 'Per Second' : 'On Click';

  const handleBuy = () => {
    if (props.cornVal >= props.price * props.buyModifier) {
      props.setCornVal(props.cornVal - props.price * props.buyModifier);
      if (props.isPassive) addPassiveModifier(props.productionRate * props.buyModifier);
      else addActiveModifier(props.productionRate * props.buyModifier);
    } else {
      alert('Not enough corn!');
    }
  };

  const addActiveModifier = (modifierValue) => {
    props.setActiveModifier(prevModifier => prevModifier + modifierValue);
    setClickMod(props.activeModifier + modifierValue); 
  };

  const setClickMod = (newScoreModifier) => {
    props.setCornValMod_Active(newScoreModifier);
  };

  const addPassiveModifier = (modifierValue) => {
    props.setPassiveModifier(prevModifier => prevModifier + modifierValue);
    setCPS(props.passiveModifier + modifierValue); 
  };

  const setCPS = (newScoreModifier) => {
    props.setCornValMod_Passive(newScoreModifier);
  };
  
  return (
    <div className="storeButton">
      <button onClick={() => {
        if (props.cornVal >= props.price * props.buyModifier) {
          props.setCornVal(props.cornVal - props.price * props.buyModifier);
          if (props.isPassive) addPassiveModifier(props.productionRate * props.buyModifier);
          else addActiveModifier(props.productionRate * props.buyModifier);
        } else {
          alert("Not enough corn!");
        }
      }}>
        {props.name}
        <br />
        {props.description}
        <br />
        +{props.productionRate} {modifierType} | Cost {props.price}
      </button>
    </div>
  );
}

export default StoreButton;
