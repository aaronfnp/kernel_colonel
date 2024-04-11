import React from 'react'
import StoreBar from './StoreBar/StoreBar'
import StoreButtonList from './StoreButtonList/StoreButtonList'

function Store({cornVal, setCornVal, setCornValMod_Passive, setCornValMod_Active}) {
  return (
    <div>
      <h2>Store</h2>
      <StoreBar />
      <StoreButtonList 
      cornVal={cornVal} 
      setCornVal={setCornVal}
      setCornValMod_Passive={setCornValMod_Passive}
      setCornValMod_Active={setCornValMod_Active} />
    </div>
  )
}

export default Store
