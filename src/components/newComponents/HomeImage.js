import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

const calc = (x, y, division) => [
  -(y - window.innerHeight * division) / 150,
  (x - window.innerWidth * division) / 150,
  1.04
]

const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const shadowo = x => `0 10px 40px rgba(0,0,0,${x})`

const HomeImage = ({ id, slug, title, handle, division }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    boxShadow: 0,
    config: { mass: 15, tension: 550, friction: 40 }
  }))

  const [inView, setInView] = useState(false)

  const [currentZ] = useState(1)

  const [yTrans, setY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => isInView(slug), true)
    return () => {
      window.removeEventListener('scroll', isInView)
    }
  }, [])

  const isInView = slug => {
    const parentLi = document.getElementById(`${slug}li`)
    if (parentLi) {
      const boundries = parentLi.getBoundingClientRect()
      const scrollTop = document.body.scrollTop
      const windowH = window.innerHeight
      let windowBottom = scrollTop + windowH
      const startPos = boundries.top + scrollTop + 200
      const stopPos = boundries.bottom + windowBottom - 300
      if (startPos < windowBottom && stopPos > windowBottom) {
        setY(Math.abs(windowBottom - startPos))
        if (parentLi.classList.contains('inView')) return
        parentLi.classList.add('inView')
        setInView(!inView)
      } else if (parentLi.classList.contains('inView')) {
        parentLi.classList.remove('inView')
        setInView(!inView)
      }
    }
  }

  return (
    <Link
      style={{ transform: `translate(0px, ${yTrans * 0.3}px)` }}
      className="w-h100 flex f-d-c justify-content-center"
      to={`/post/${id}`}
    >
      <animated.div
        className="imgLink"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y, division) })}
        onMouseEnter={() => {
          set({ boxShadow: 0.8 })
          setTimeout(() => (document.querySelector('main').style.zIndex = 9999), 200)
        }}
        onMouseLeave={() => {
          set({ xys: [0, 0, 1], boxShadow: 0 })
          setTimeout(() => (document.querySelector('main').style.zIndex = 0), 300)
        }}
        style={{
          transform: props.xys.interpolate(trans),
          boxShadow: props.boxShadow.interpolate(shadowo),
          zIndex: currentZ
        }}
      >
        <img
          className="homeImage"
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
