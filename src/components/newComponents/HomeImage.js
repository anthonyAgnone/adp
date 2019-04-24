import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

const calc = (x, y, division) => [
  -(y - window.innerHeight * division) / 150,
  (x - window.innerWidth * division) / 150,
  1.04
]

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const shadowo = x => `0 10px 40px rgba(0,0,0,${x})`

const HomeImage = ({ id, title, handle, division }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    boxShadow: 0,
    zIndex: 1,
    config: { mass: 15, tension: 550, friction: 40 }
  }))
  return (
    <Link
      className='w-h100 flex f-d-c justify-content-center'
      to={`/post/${id}`}>
      <animated.div
        className='imgLink'
        onMouseMove={({ clientX: x, clientY: y }) =>
          set({ xys: calc(x, y, division) })
        }
        onMouseEnter={() => {
          set({ boxShadow: 0.8, zIndex: 9999 })
        }}
        onMouseLeave={() => {
          set({ xys: [0, 0, 1], boxShadow: 0, zIndex: 1 })
        }}
        style={{
          transform: props.xys.interpolate(trans),
          boxShadow: props.boxShadow.interpolate(shadowo),
          zIndex: props.zIndex
        }}>
        <img
          className='img-fit'
          alt={title}
          src={
            handle
              ? `https://media.graphcms.com/resize=w:150,h:150,fit:crop/${handle}`
              : 'https://via.placeholder.com/150?text=+'
          }
        />
      </animated.div>
    </Link>
  )
}

export default HomeImage
