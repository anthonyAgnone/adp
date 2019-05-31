import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'

const POSTS_PER_PAGE = 4

const Home = ({ data: { loading, error, posts, postsConnection, networkStatus }, loadMorePosts }) => {
  if (error) return <h1>Error fetching posts!</h1>
  if (posts && postsConnection) {
    const areMorePosts = posts.length < postsConnection.aggregate.count
    return (
      <section className="w100 flex">
        <ul className="w50">
          {posts.map((post, i) => (
            <LeftColumn key={i} {...post} i={i} />
          ))}
        </ul>
        <ul className="w50">
          {posts.map((post, i) => (
            <RightColumn key={i} {...post} i={i} />
          ))}
        </ul>
        <div className="show-more">
          {areMorePosts ? (
            <button className="home-btn" disabled={loading} onClick={() => loadMorePosts()}>
              {loading ? 'Loading...' : 'Show More Posts'}
            </button>
          ) : (
            ''
          )}
        </div>
      </section>
    )
  }
  return <h2>Loading posts...</h2>
}

export const posts = gql`
  query posts($first: Int!, $skip: Int!) {
    posts(orderBy: dateAndTime_DESC, first: $first, skip: $skip) {
      id
      slug
      title
      dateAndTime
      date
      coverImage {
        handle
      }
    }
    postsConnection {
      aggregate {
        count
      }
    }
  }
`

export const postsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE
}

export default graphql(posts, {
  options: {
    variables: postsQueryVars,
    notifyOnNetworkStatusChange: true
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.posts.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            posts: [...previousResult.posts, ...fetchMoreResult.posts]
          })
        }
      })
    }
  })
})(Home)
