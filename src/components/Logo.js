import React from 'react'

const Logo = ({ expanded, handleClick }) => {
  return (
    <div className='logo w100'>
      <button
        className={`logoButton w100 center-both ${
          expanded ? 'expanded' : 'collapsed'
        }`}
        onClick={handleClick}
        onMouseEnter={() =>
          document.querySelector('.newCursor').classList.add('cursorHover')
        }
        onMouseLeave={() =>
          document.querySelector('.newCursor').classList.remove('cursorHover')
        }>
        A D <span>- MENU -</span>
      </button>
    </div>
  )
}

export default Logo
