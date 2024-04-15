<<<<<<< HEAD
import React from 'react'

function StoreBar() {
  return (
    <div>
      <h3>Store Bar</h3>
      <small>Buy</small>
      <small>Sell</small>
      <small>x1</small>
      <small>x5</small>
    </div>
  )
}

export default StoreBar
=======
import React from 'react'

function StoreBar({setIsSell, setBuyModifier}) {
  return (
    <div>
      <h3>Store Bar</h3>
      <button onClick={() => setIsSell(false)}>Buy</button>
      <button onClick={() => setIsSell(true)}>Sell</button>
      <button onClick={() => setBuyModifier(1)}>x1</button>
      <button onClick={() => setBuyModifier(5)}>x5</button>
      <button onClick={() => setBuyModifier(10)}>x10</button>
    </div>
  )
}

export default StoreBar
>>>>>>> 5197e5ba8c538bf8d9dc370f928a8aa8b810a506
