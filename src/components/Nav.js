import React from 'react'
import { Link } from 'react-router-dom'

const Nav = handleClick => {
  return (
    <ul className="w-h100 flex f-d-c justify-content-center">
      <li>
        <Link to="/" onClick={handleClick}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={handleClick}>
          About Me
        </Link>
      </li>
      <li>
        <Link to="/process" onClick={handleClick}>
          My Process
        </Link>
      </li>
      <li>
        <Link to="/commissions" onClick={handleClick}>
          Commissions
        </Link>
      </li>
      <li>
        <Link to="/patreon" onClick={handleClick}>
          Patreon
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={handleClick}>
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default Nav
