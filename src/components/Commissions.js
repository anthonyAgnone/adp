import React, { useEffect } from 'react'

const Commissions = () => {
  useEffect(() => {
    document.querySelector('body').className = 'commission'
  })
  return (
    <div class="pageWrapper">
      <h1>Coming Soon</h1>
    </div>
  )
}

export default Commissions
