import React, { useState } from 'react';

function StoreButton(props) {
  const [quantity, setQuantity] = useState(props.quantity);
  const [price, setPrice] = useState(props.price);
  let modifierType = null;
  // let modifierBuySell = 1;

    // ADD A VIRTUAL INTO THIS OR MODEL?

    // useEffect(() => {
    //   setQuantity(props.userQty);
    // }, [props.userQty]);

    if (props.isPassive) {
     modifierType = 'Per Second'
    }
    else if (!props.isPassive) {
      modifierType = 'On Click'
    }

    const calculatePassivePrice = () => {
      return Math.ceil(props.price * Math.pow(1.15, quantity + 1));
    };

    const calculateActivePrice = () => {
      return Math.ceil(props.price * Math.pow(5, quantity + 1));
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
        if (props.cornVal >= price) { 
          props.setCornVal(props.cornVal - price); 
          setQuantity(prevQuantity => prevQuantity + props.buyModifier);
          if (props.isPassive){
            addPassiveModifier(props.productionRate * props.buyModifier);
            setPrice(calculatePassivePrice());
          }
          else if (!props.isPassive) {
            addActiveModifier(props.productionRate * props.buyModifier);
            setPrice(calculateActivePrice());
          }
         
        } else {
          alert("Not enough corn!");
        }
      }}>
          {props.name} x{quantity}
          <br></br>
          <small>{props.description}</small>
          <br></br>
          +{props.productionRate} {modifierType} | Cost {price}
          </button>
    </div>
  )
}

export default StoreButton
