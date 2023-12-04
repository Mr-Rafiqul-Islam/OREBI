import React from 'react'

const List = ({className,href,text}) => {
  return (
    <li><a href={href} className={`${className} font-dmsans`}>{text}</a></li>
  )
}

export default List