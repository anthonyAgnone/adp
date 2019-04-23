import React from "react";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { useSpring, animated } from "react-spring";

const POSTS_PER_PAGE = 4;

const formatDate = date => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let newDate = date.split("T");
  let formatedDate = newDate[0].split("-");
  let monthName;

  if (formatedDate[1].indexOf("0") > -1)
    monthName = monthNames[formatedDate[1].split("0")[1] - 1];
  else monthName = monthNames[formatedDate[1] - 1];
  return `${monthName} ${formatedDate[2]}, ${formatedDate[0]}`;
};

const updateBody = () => {
  document.querySelector("body").className = "home";
};

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 100,
  (x - window.innerWidth / 2) / 100,
  1.06
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const shadowo = x => `0 10px 40px rgba(0,0,0,${x})`;

const Home = ({
  data: { loading, error, posts, postsConnection, networkStatus },
  loadMorePosts
}) => {
  if (error) return <h1>Error fetching posts!</h1>;
  if (posts && postsConnection) {
    updateBody();
    const areMorePosts = posts.length < postsConnection.aggregate.count;
    const [props, set] = useSpring(() => ({
      xys: [0, 0, 1],
      boxShadow: 0,
      zIndex: 9999,
      config: { mass: 5, tension: 350, friction: 40 }
    }));

    return (
      <section>
        <ul className="flex f-d-c">
          {posts.map((post, index) => (
            <li
              id={`post${index}`}
              onMouseEnter={() => {
                document.getElementById(`post${index}`).style.zIndex = 9999;
              }}
              onMouseLeave={() => {
                setTimeout(
                  () =>
                    (document.getElementById(`post${index}`).style.zIndex = 1),
                  300
                );
              }}
              className={`${index % 2 === 0 ? "left" : "right"} flex`}
              key={`post-${post.id}`}>
              <Link to={`/post/${post.id}`}>
                <animated.img
                  onMouseMove={({ clientX: x, clientY: y }) =>
                    set({ xys: calc(x, y) })
                  }
                  onMouseLeave={() => {
                    set({ xys: [0, 0, 1], boxShadow: 0 });
                  }}
                  onMouseEnter={() => {
                    set({ boxShadow: 0.8 });
                  }}
                  style={{
                    transform: props.xys.interpolate(trans),
                    boxShadow: props.boxShadow.interpolate(shadowo),
                    zIndex: props.zIndex
                  }}
                  alt={post.title}
                  src={
                    post.coverImage
                      ? `https://media.graphcms.com/resize=w:150,h:150,fit:crop/${
                          post.coverImage.handle
                        }`
                      : "https://via.placeholder.com/150?text=+"
                  }
                />
              </Link>
              <div className="desc">
                <Link to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{formatDate(post.date)}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="show-more">
          {areMorePosts ? (
            <button
              className="home-btn"
              disabled={loading}
              onClick={() => loadMorePosts()}>
              {loading ? "Loading..." : "Show More Posts"}
            </button>
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }
  return <h2>Loading posts...</h2>;
};

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
`;

export const postsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE
};

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
            return previousResult;
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            posts: [...previousResult.posts, ...fetchMoreResult.posts]
          });
        }
      });
    }
  })
})(Home);
