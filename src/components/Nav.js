import React from 'react'
import { NavLink } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Nav = ({ data: { loading, navigations, error } }) => {
  if (error) return <h1>Error fetching Naviation</h1>
  if (!loading) {
    return (
      <nav>
        {navigations.map((link, index) => (
          <NavLink to={link.route} className='navLink' activeClassName='isActive' key={index}>
            {link.title}
          </NavLink>
        ))}
      </nav>
    )
  }
  return <nav />
}

export const navigations = gql`
  query navigations {
    navigations {
      id
      title
      route
    }
  }
`

export default graphql(navigations)(Nav)
