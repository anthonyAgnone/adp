import React from 'react'

const Logo = ({ expanded, handleClick }) => {
  return (
    <button className='logoButton w100 center-both' onClick={handleClick}>
      A<span>nthony</span> D<span>ePietro</span>
    </button>
  )
}

export default Logo
