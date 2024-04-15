import React from 'react'

function DisplayStats({user}) {
  return (
    <div>
      <h4>Current Display: Stats</h4>
      <h5>Total Cookies Earned: {user.totalScore}</h5>
      {/* DO WE WANT THIS? */}
      <h5>Total Time Wasted: 0, it's not wasted </h5>
    </div>
  )
}

export default DisplayStats
