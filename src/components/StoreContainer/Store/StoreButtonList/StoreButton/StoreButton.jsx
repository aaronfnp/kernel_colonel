<<<<<<< HEAD
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function StoreButton({ name, description, quantity, price, productionRate, img, cornVal, setCornVal, buyModifier, setActiveModifier, activeModifier, passiveModifier, setPassiveModifier, setCornValMod_Passive, setCornValMod_Active }) {
=======
import React, { useState } from 'react';

function StoreButton(props) {
  const [quantity, setQuantity] = useState(props.quantity);
  const [price, setPrice] = useState(props.price);
  let modifierType = null;
  let modifierBuySell = 1;
>>>>>>> 2751166e95b44185665fdf8cc2b3ae3eaf5c40bb

  const handleBuy = () => {
    const cost = price * buyModifier;
    if (cornVal >= cost) {
      setCornVal(prevCornVal => prevCornVal - cost);
      const production = productionRate * buyModifier;
      if (passiveModifier) {
        setPassiveModifier(prev => prev + production);
      } else {
        setCornValMod_Active(prev => prev + production);
      }
    } else {
      alert("Not enough corn!");
    }
<<<<<<< HEAD
  };

  return (
    <Card variant="outlined" className="storeButton">
      <CardContent style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <img src={img} alt={name} style={{ width: '100px', height: '100px' }} />
        </div>
        <div style={{ flex: 2 }}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </div>
        <div style={{ flex: 1 }}>
          <Typography variant="body2" color="textSecondary" component="p">
            Quantity: {quantity}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: {price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Production Rate: {productionRate}
          </Typography>
          <Button onClick={handleBuy} disabled={cornVal < price * buyModifier}>Buy</Button>
        </div>
      </CardContent>
    </Card>
  );
=======
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
          {props.description}
          <br></br>
          +{props.productionRate} {modifierType} | Cost {price}
          </button>
    </div>
  )
>>>>>>> 2751166e95b44185665fdf8cc2b3ae3eaf5c40bb
}

export default StoreButton;
