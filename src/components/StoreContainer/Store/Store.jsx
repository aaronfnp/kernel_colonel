import React, {useEffect, useState} from 'react'
import StoreBar from './StoreBar/StoreBar'
import StoreButtonList from './StoreButtonList/StoreButtonList'

function Store({cornVal, setCornVal, totalCornVal, setTotalCornVal, setCornValMod_Passive, setCornValMod_Active}) {
  const [buyModifier, setBuyModifier] = useState(1);
  const [isSell, setIsSell] = useState(false);

  //CURRENTLY JUST FOR VISUALLY SHOWING BUY/SELL
  const [sellText, setSellText] = useState("Buying");

  useEffect(() => {
    if (isSell) {
      setSellText("Selling");
    } else {
      setSellText("Buying");
    }
  }, [isSell]);
  // ^^^^^^^^^

  return (
    <div>
      <h2>Store</h2>
      <StoreBar setIsSell={setIsSell} setBuyModifier={setBuyModifier} />
      <h2>Currently {sellText} at x{buyModifier}</h2>
      <StoreButtonList 
      cornVal={cornVal} 
      setCornVal={setCornVal}
      totalCornVal={totalCornVal}
      setTotalCornVal={setTotalCornVal}
      setCornValMod_Passive={setCornValMod_Passive}
      setCornValMod_Active={setCornValMod_Active} 
      buyModifier={buyModifier}
      isSell={isSell}
      />
    </div>
  )
}

export default Store
