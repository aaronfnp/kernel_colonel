<<<<<<< HEAD
import React from 'react'
import Store from './Store/Store'

function StoreContainer({cornVal, setCornVal, setCornValMod_Passive, setCornValMod_Active}) {
  return (
    <div>
      <h1>StoreContainer</h1>
      <Store 
      cornVal={cornVal} 
      setCornVal={setCornVal}
      setCornValMod_Passive={setCornValMod_Passive}
      setCornValMod_Active={setCornValMod_Active} />

      {/* ICEBOX */}
      {/* <SpinWheel /> */}
    </div>
  )
}

export default StoreContainer
=======
import React from 'react'
import Store from './Store/Store'

function StoreContainer({cornVal, setCornVal, totalCornVal, setTotalCornVal, setCornValMod_Passive, setCornValMod_Active}) {
  return (
    <div>
      <h1>StoreContainer</h1>
      <Store 
      cornVal={cornVal} 
      setCornVal={setCornVal}
      totalCornVal={totalCornVal}
      setTotalCornVal={setTotalCornVal}
      setCornValMod_Passive={setCornValMod_Passive}
      setCornValMod_Active={setCornValMod_Active} />

      {/* ICEBOX */}
      {/* <SpinWheel /> */}
    </div>
  )
}

export default StoreContainer
>>>>>>> 5197e5ba8c538bf8d9dc370f928a8aa8b810a506
