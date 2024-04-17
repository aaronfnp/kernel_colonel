import React from 'react';
import './StoreButton.css';
import React, { useState } from 'react';
import { updateUserQty } from '../../../../../utilities/users-api';

function StoreButton(props) {
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

  async function handleUserQty() {
    try {
      await updateUserQty(user._id, quantity);
  
      setUserQty(prevQuantity => {
        setUser(prevUser => ({
          ...prevUser,
          quantity: prevQuantity
        }));
        console.log(`Updated quantity to ${prevQuantity}`);
        return prevQuantity;
      });
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  }

//   const handleBuy = () => {
//     if (props.cornVal >= price) { 
//       props.setCornVal(props.cornVal - price); 
//       setQuantity(prevQuantity => prevQuantity + props.buyModifier);

//       if (props.isPassive){
//         addPassiveModifier(props.productionRate * props.buyModifier);
//         setPrice(calculatePassivePrice());
//       }
//       else if (!props.isPassive) {
//         addActiveModifier(props.productionRate * props.buyModifier);
//         setPrice(calculateActivePrice());
//       }
     
//     } else {
//       alert("Not enough corn!");
//   }

// }
  
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
