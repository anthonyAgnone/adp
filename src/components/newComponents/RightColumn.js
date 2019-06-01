import React from 'react'
import { Link } from 'react-router-dom'
import HomeImage from './HomeImage'
import FormattedDate from './FormattedDate'

const RightColumn = ({ id, coverImage, date, slug, title, i }) => {
  if (i % 2 !== 0)
    return (
      <li className="preview flex f-d-c justify-content-center align-items-center" id={`${slug}li`}>
        <HomeImage slug={slug} i={i} id={id} title={title} {...coverImage} division={0.75} />
      </li>
    )
  return (
    <li className="preview flex f-d-c justify-content-center align-items-center mobDNone">
      <Link to={`/post/${id}`}>
        <h1 className="font3">{title}</h1>
        <FormattedDate className="font1 italic text-right" date={date} />
      </Link>
    </li>
  )
}

export default RightColumn
