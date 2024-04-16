import React from 'react'

function StoreBar({setIsBuying, setBuyModifier}) {
  return (
    <div>
      <h3>Store Bar</h3>
      <button onClick={() => setIsBuying(true)}>Buy</button>
      <button onClick={() => setIsBuying(false)}>Sell</button>
      <button onClick={() => setBuyModifier(1)}>x1</button>
      <button onClick={() => setBuyModifier(5)}>x5</button>
      <button onClick={() => setBuyModifier(10)}>x10</button>
    </div>
  )
}

export default StoreBar
