import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import HomeImage from './HomeImage'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import Masonry from 'react-masonry-css'

const POSTS_PER_PAGE = 100

const Home = ({ data: { loading, error, posts, postsConnection, networkStatus }, loadMorePosts }) => {
  const childElements = posts && posts.map(post => {
    return <HomeImage
      slug={post.slug}
      i={post.i}
      id={post.id}
      title={post.title}
      {...post.coverImage}
      division={0.25}
    />
  })
  if (error) return <h1>Error fetching posts!</h1>
  if (posts && postsConnection) {
    const areMorePosts = posts.length < postsConnection.aggregate.count
    return (
      <section className="w100">
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {childElements}
        </Masonry>
        {/* <ul className="w100 flex">
          {posts.map((post, i) => (
            <LeftColumn key={i} {...post} i={i} />
          ))}
        </ul>
        <ul className="w50 mobw50">
          {posts.map((post, i) => (
            <RightColumn key={i} {...post} i={i} />
          ))}
        </ul> */}

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
