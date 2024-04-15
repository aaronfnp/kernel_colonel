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
