import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const About = ({ data: { loading, error, authors } }) => {
  if (error) return <h1>Error fetching authors!</h1>
  if (!loading) {
    return (
      <div>
        {authors.map(author => (
          <div className='authorWrapper' key={author.id}>
            <div className='infoHeader'>
              <img
                className='avatar'
                alt={`${author.name} avatar`}
                src={`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${author.avatar.handle}`}
              />
              <h1>My name is {author.name}</h1>
            </div>
            <div className='bibliography'>
              <p>{author.bibliography}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  return <h2>Loading author...</h2>
}

export const authors = gql`
  query authors {
    authors {
      id
      name
      bibliography
      avatar {
        handle
      }
    }
  }
`

export default graphql(authors)(About)
