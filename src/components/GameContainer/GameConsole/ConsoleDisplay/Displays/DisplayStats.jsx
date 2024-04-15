<<<<<<< HEAD
import React from 'react'

function DisplayStats() {
  return (
    <div>
      <h4>Current Display: Stats</h4>
      <h5>Total Cookies Earned:</h5>
      <h5>Total Time Wasted:</h5>
    </div>
  )
}

export default DisplayStats
=======
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
>>>>>>> 5197e5ba8c538bf8d9dc370f928a8aa8b810a506
