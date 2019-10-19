import React, { useEffect } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const About = ({ data: { loading, error, authors } }) => {
  /* // Fancy Agnone Stuff, need access to graphcms to continue using
  if (error) return <h1>Error fetching authors!</h1>
  if (!loading) {
    useEffect(() => {
      document.querySelector('body').className = 'about'
    })
    return (
      <div className='pageWrapper'>
        {authors.map(author => (
          <div className='authorWrapper' key={author.id}>
            <div className='infoHeader'>
              {author.avatar ? (
                <img
                  className='avatar'
                  alt={`${author.name} avatar`}
                  src={`https://media.graphcms.com/${author.avatar.handle}`}
                />
              ) : (
                ''
              )}
              <h1>My name is {author.name}</h1>
            </div>
            <div className='bibliography'>
              <p>{author.bibliography ? author.bibliography : ''}</p>
            </div>
          </div>
        ))}
        <h1>MY RESUME</h1>
        <p>coming soon...</p>
        <a href='/'>Back to Home</a>
      </div>
    )
  }
  return <h2>Loading author...</h2>
  */

  // Not Fancy Ted stuff, until I get access to graphcms
  return (
    <div className='pageWrapper'>
      <h1>My Name is Anthony DePietro</h1>
      <p>
        After Graduating High School in 2010 at New Castle High, I majored in
        Cinema/Animation at Ednboro University where I obtained a Bachelors
        Degree in Fine Arts in 2014.
      </p>
      <p>
        I currently work in Graphic Design, Advertising, and Media, but I am
        also a Freelance Illustrator on the side.{' '}
      </p>
      <p>
        While I am an unabahsed skull-enthusiast, I am comfortable in a variety
        of styles and mediums.
      </p>
    </div>
  )
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
