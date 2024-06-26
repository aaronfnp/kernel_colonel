import React, { useEffect, useState } from 'react';
import './StoreButton.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function StoreButton(props) {
  const quantity = props.quantity || 0
  const [currentPrice, setCurrentPrice] = useState(props.price)

  useEffect(() => {
    if (props.isPassive) {
      if (quantity > 0) {
      addPassiveModifier(quantity * props.productionRate);
      setCurrentPrice(calculatePassivePrice())}
    }
    else { 
      if (quantity > 0) {
      addActiveModifier(quantity * props.productionRate);
      setCurrentPrice(calculateActivePrice())}}
  }, [])

  let modifierType = props.isPassive ? 'Per Second' : 'On Click';

  const calculatePassivePrice = () => {
    return Math.ceil(props.price * Math.pow(1.15, quantity + 1));
  };

  const calculateActivePrice = () => {
    return Math.ceil(props.price * Math.pow(5, quantity + 1));
  }

  const handleBuy = () => {
    if (((props.cornVal >= currentPrice * props.buyModifier) && props.isBuying) || (quantity >= 1 && !props.isBuying)) {
      props.onUpdateQuantity( quantity + (1 * props.buyModifier * props.buySellModifier));
      props.setCornVal(props.cornVal - (currentPrice * props.buySellModifier * props.buyModifier));
      if (props.isPassive) {
        addPassiveModifier(props.productionRate * props.buyModifier * props.buySellModifier);
        setCurrentPrice(calculatePassivePrice())}
      else { 
        addActiveModifier(props.productionRate * props.buyModifier * props.buySellModifier);
        setCurrentPrice(calculateActivePrice())}
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
    setCPS((props.passiveModifier + modifierValue)); 
  };

  const setCPS = (newScoreModifier) => {
    console.log("NEW SCORE MOD", newScoreModifier)
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
            <Typography variant="body2" component="p">Cost: {currentPrice * props.buyModifier}</Typography>
            <Typography variant="body2" component="p">+{props.productionRate} {modifierType}</Typography>
            <Typography variant="body2" component="p">Quantity: {quantity}</Typography>
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
