import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function StoreButton({ name, description, quantity, price, productionRate, img, cornVal, setCornVal, buyModifier, setActiveModifier, activeModifier, passiveModifier, setPassiveModifier, setCornValMod_Passive, setCornValMod_Active }) {

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
}

export default StoreButton;
