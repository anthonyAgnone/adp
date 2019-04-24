import React, { useState } from 'react'
import { Nav, NavLink } from 'react-router-dom'
import Radium from 'radium'

const Nav = () => {
  ;[expanded, setExpanded] = useState(false)

  const handleClick = () => {
    setExpanded(!expanded)
  }
  return (
    <Nav className='navigation flex f-d-c justify-content-center align-items-center'>
      <NavLink to='/' onClick={handleClick}>
        Home
      </NavLink>
      <NavLink to='/about' onClick={handleClick}>
        About Me
      </NavLink>
      <NavLink to='/process' onClick={handleClick}>
        My Process
      </NavLink>
      <NavLink to='/commissions' onClick={handleClick}>
        Commissions
      </NavLink>
      <NavLink to='http://www.patreon.com' onClick={handleClick}>
        Patreon
      </NavLink>
      <NavLink to='/contact' onClick={handleClick}>
        Contact
      </NavLink>
    </Nav>
  )
}

export default Radium(Nav)
