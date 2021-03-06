import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'

const Post = ({ data: { loading, error, post } }) => {
  if (error) return <h1>Error fetching the post!</h1>
  if (!loading) {
    return (
      <div className='postWrapper'>
        <Link className='back-arrow' to='/'>
          {' '}
          &lt; Back{' '}
        </Link>
        <article className='center-both'>
          <h1>{post.title ? post.title : 'unnamed'}</h1>
          <div>
            <img
              alt={post.title ? post.title : 'a comic book character'}
              src={
                post.coverImage
                  ? `https://media.graphcms.com/${post.coverImage.handle}`
                  : 'https://via.placeholder.com/150'
              }
            />
          </div>
          <Markdown
            source={post.content ? post.content : ''}
            escapeHtml={false}
          />
        </article>
      </div>
    )
  }
  return <h2>Loading post...</h2>
}

export const singlePost = gql`
  query singlePost($id: ID!) {
    post(where: { id: $id }) {
      id
      slug
      title
      coverImage {
        handle
      }
      content
      dateAndTime
    }
  }
`

export default graphql(singlePost, {
  options: ({ match }) => ({
    variables: {
      id: match.params.slug
    }
  })
})(Post)
