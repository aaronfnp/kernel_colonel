import React, {useEffect, useState} from 'react'
import StoreBar from './StoreBar/StoreBar'
import StoreButtonList from './StoreButtonList/StoreButtonList'

function Store({cornVal, setCornVal, totalCornVal, setTotalCornVal, setCornValMod_Passive, setCornValMod_Active, user, setUser}) {
  const [buyModifier, setBuyModifier] = useState(1);
  const [isSell, setIsSell] = useState(false);
  const [isBuying, setIsBuying] = useState(true);
  const [buySellText, setBuySellText] = useState("Buying");

  useEffect(() => {
    if (!isBuying) {
      setIsBuying(false);
      setBuySellText("Selling");
    }
    if (isBuying) {
      setIsBuying(true);
      setBuySellText("Buying");
    }
  }, [isBuying]);
  // ^^^^^^^^^

  return (
    <div>
      <h2>Store</h2>
      <StoreBar setIsBuying={setIsBuying} setBuyModifier={setBuyModifier} />
      <h2>Currently {buySellText} at x{buyModifier}</h2>
      <StoreButtonList 
      cornVal={cornVal} 
      setCornVal={setCornVal}
      totalCornVal={totalCornVal}
      setTotalCornVal={setTotalCornVal}
      setCornValMod_Passive={setCornValMod_Passive}
      setCornValMod_Active={setCornValMod_Active} 
      buyModifier={buyModifier}
      isBuying={isBuying}
      user={user}
      setUser={setUser}
      />
    </div>
  )
}

export default Store
