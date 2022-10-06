import React from 'react'

const Title = ({text, size}) => {
  return (
    <span className={`title-${size}`}>
        {text}
    </span>
  )
}

export default Title