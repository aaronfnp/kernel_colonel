import React, {useEffect, useState} from 'react'
import StoreBar from './StoreBar/StoreBar'
import StoreButtonList from './StoreButtonList/StoreButtonList'
import "./Store.css";

function Store({cornVal, setCornVal, totalCornVal, setTotalCornVal, setCornValMod_Passive, setCornValMod_Active, onUpdateUpgradeQuantity}) {
  const [buyModifier, setBuyModifier] = useState(1);
  const [buySellModifier, setBuySellModifier] = useState(1);
  const [isBuying, setIsBuying] = useState(true);
  const [buySellText, setBuySellText] = useState("Buying");

  useEffect(() => {
    if (!isBuying) {
      setIsBuying(false);
      setBuySellText("Selling");
      setBuySellModifier(-1)
    }
    if (isBuying) {
      setIsBuying(true);
      setBuySellText("Buying");
      setBuySellModifier(1)
    }
  }, [isBuying]);

  return (
    <div>
      <h2 className='store'>Store</h2>
      <StoreBar setIsBuying={setIsBuying} setBuyModifier={setBuyModifier} />
      <h2>Currently {buySellText} at x{buyModifier}</h2>
      <StoreButtonList 
      onUpdateUpgradeQuantity={onUpdateUpgradeQuantity}
      cornVal={cornVal} 
      setCornVal={setCornVal}
      totalCornVal={totalCornVal}
      setTotalCornVal={setTotalCornVal}
      setCornValMod_Passive={setCornValMod_Passive}
      setCornValMod_Active={setCornValMod_Active} 
      buyModifier={buyModifier}
      isBuying={isBuying}
      buySellModifier={buySellModifier}
      />
    </div>
  )
}

export default Store
