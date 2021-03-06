import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Commissions = data => {
  /* if (data.error) return <h1>Error fetching posts!</h1>
  if (data.sitePage)
    return <section className='pageWrapper'>{data.sitePage.name}</section>
  return <h2>Loading data...</h2> */

  return (
    <div className='pageWrapper'>
      <h1>Commission Information Coming Soon</h1>
    </div>
  )
}

export const sitePages = gql`
  query {
    sitePage(where: { name: "commissions" }) {
      name
      content {
        html
      }
      images {
        handle
      }
    }
  }
`
export default graphql(sitePages, {
  props: ({ data }) => ({
    data
  })
})(Commissions)
