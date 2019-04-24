import React from 'react'

const formatDate = date => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  let newDate = date.split('T')
  let formatedDate = newDate[0].split('-')
  let monthName

  if (formatedDate[1].indexOf('0') > -1)
    monthName = monthNames[formatedDate[1].split('0')[1] - 1]
  else monthName = monthNames[formatedDate[1] - 1]
  return `${monthName} ${formatedDate[2]}, ${formatedDate[0]}`
}

const FormattedDate = ({ date, className }) => {
  return <p className={className}>{formatDate(date)}</p>
}

export default FormattedDate
