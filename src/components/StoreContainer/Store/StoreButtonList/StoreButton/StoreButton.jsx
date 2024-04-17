import React, { useState } from 'react';
import './StoreButton.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function StoreButton(props) {
  const [qty, setQty] = useState(0);

  let modifierType = props.isPassive ? 'Per Second' : 'On Click';

  const handleBuy = () => {
    if (((props.cornVal >= props.price * props.buyModifier) && props.isBuying) || (qty >= 1 && !props.isBuying)) {
      setQty(prevQty => prevQty + (1 * props.buySellModifier));
      props.setCornVal(props.cornVal - (props.price * props.buySellModifier * props.buyModifier));
      if (props.isPassive) addPassiveModifier(props.productionRate * props.buyModifier * props.buySellModifier);
      else addActiveModifier(props.productionRate * props.buyModifier * props.buySellModifier);
    }
    else {
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
      <Card key={props.idx} className="upgradeCard">
        <CardContent className="upgradeCardContent">
          <div className="upgradeImage">
            <img src={props.img} alt={props.name} />
          </div>
          <div className="upgradeDetails">
            <Typography variant="h6" component="h2">{props.name}</Typography>
            <Typography variant="body2" component="p">{props.description}</Typography>
            <Typography variant="body2" component="p">Cost: {props.price}</Typography>
            <Typography variant="body2" component="p">Production Rate: {props.productionRate}</Typography>
            <Typography variant="body2" component="p">Quantity: {qty}</Typography>
          </div>
          <div className="upgradeActions">
            <Button variant="contained" className="buyButton" onClick={handleBuy}>Buy</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default StoreButton;
