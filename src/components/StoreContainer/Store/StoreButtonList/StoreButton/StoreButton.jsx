import React, { useState } from 'react';

function StoreButton(props) {
  const [quantity, setQuantity] = useState(props.quantity);
  let modifierType = null;
  let modifierBuySell = 1;

    // ADD A VIRTUAL INTO THIS OR MODEL?

    if (props.isPassive) {
     modifierType = 'Per Second'
    }
    else if (!props.isPassive) {
      modifierType = 'On Click'
    }


    
    // ACTIVE (CLICK) MODIFIER FUNCTION USED BY BUTTONS, SETS STATES ON GAMEPAGE
  const addActiveModifier = (modifierValue) => {
    props.setActiveModifier(prevModifier => prevModifier + modifierValue);
    setClickMod(props.activeModifier + modifierValue); 
  };

  // CALLED BY ACTIVE MODIFIER FUNCTION
  const setClickMod = (newScoreModifier) => {
    props.setCornValMod_Active(newScoreModifier);
  };

  // PASSIVE MODIFIER FUNCTION USED BY BUTTONS, SETS STATES ON GAMEPAGE
  const addPassiveModifier = (modifierValue) => {
    props.setPassiveModifier(prevModifier => prevModifier + modifierValue);
    setCPS(props.passiveModifier + modifierValue); 
  };

  // CALLED BY PASSIVE MODIFIER FUNCTION
  const setCPS = (newScoreModifier) => {
    props.setCornValMod_Passive(newScoreModifier);
  };
  
    return (
    <div>
      <button onClick={() => {
        if (props.cornVal >= (props.price * props.buyModifier)) {
          props.setCornVal(props.cornVal - (props.price * props.buyModifier));
          setQuantity(prevQuantity => prevQuantity + props.buyModifier);
          if (props.isPassive) addPassiveModifier(props.productionRate * props.buyModifier);
          else if (!props.isPassive) addActiveModifier(props.productionRate * props.buyModifier);
          
        } else {
            // THIS WILL BE CHANGED TO A NON-ALERT
          alert("Not enough corn!");
        }
        }}>
          {props.name} x{quantity}
          <br></br>
          {props.description}
          <br></br>
          +{props.productionRate} {modifierType} | Cost {props.price}
          </button>
    </div>
  )
}

export default StoreButton
