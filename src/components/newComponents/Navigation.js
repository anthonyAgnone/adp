import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
const Navigation = ({ page }) => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    if (document.querySelector('.full-screen')) {
      document.querySelector('.top-left').classList.toggle('expanded')
      document.querySelector('.top-right').classList.toggle('expanded')
    }
    setExpanded(!expanded)
  }
  return (
    <nav
      className={`navigation ${
        expanded ? 'expanded' : ''
      } flex f-d-c justify-content-center align-items-center ${page}`}
    >
      <NavLink className="mb1 mt1" to="/" onClick={handleClick}>
        Home
      </NavLink>
      <NavLink className="mb1 mt1" to="/about" onClick={handleClick}>
        About Me
      </NavLink>
      <NavLink className="mb3" to="/process" onClick={handleClick}>
        My Process
      </NavLink>
      <Logo handleClick={handleClick} expanded={expanded} />
      <NavLink className="mt3" to="/commissions" onClick={handleClick}>
        Commissions
      </NavLink>
      <a target="_blank" rel="noopener noreferrer" href="http://patreon.com">
        Patreon
      </a>
      <NavLink className="mt1 mb1" to="/contact" onClick={handleClick}>
        Contact
      </NavLink>
    </nav>
  )
}

export default Navigation
