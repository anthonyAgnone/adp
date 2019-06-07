import React from 'react'
import { Link } from 'react-router-dom'
import HomeImage from './HomeImage'
import FormattedDate from './FormattedDate'

const LeftColumn = ({ id, coverImage, date, slug, title, i }) => {
  const hideHeader = () => {
    document.querySelector('.full-screen').style.backgroundColor = 'green'
  }
  if (i % 2 === 0)
    return (
      <li
        className={`${slug}li preview flex f-d-c justify-content-center align-items-center`}
        id={`${slug}li`}>
        <HomeImage
          slug={slug}
          i={i}
          id={id}
          title={title}
          {...coverImage}
          division={0.25}
        />
      </li>
    )
  return (
    <li className='preview flex f-d-c justify-content-center align-items-center mobDNone'>
      <Link to={`/post/${id}`} onClick={() => hideHeader()}>
        <h1 className='font3'>{title ? title : ''}</h1>
        {date ? (
          <FormattedDate className='font1 italic text-left' date={date} />
        ) : (
          ''
        )}
      </Link>
    </li>
  )
}

export default LeftColumn
