import React from 'react'
import Store from './Store/Store'


function StoreContainer({cornVal, setCornVal, totalCornVal, setTotalCornVal, setCornValMod_Passive, setCornValMod_Active, user, setUser}) {
  return (
    <div>
      <h1>StoreContainer</h1>
      <Store 
      cornVal={cornVal} 
      setCornVal={setCornVal}
      totalCornVal={totalCornVal}
      setTotalCornVal={setTotalCornVal}
      setCornValMod_Passive={setCornValMod_Passive}
      setCornValMod_Active={setCornValMod_Active}
      user={user}
      setUser={setUser}
      />

      {/* ICEBOX */}
      {/* <SpinWheel /> */}
    </div>
  )
}

export default StoreContainer
