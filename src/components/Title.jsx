import React from 'react'

const Title = ({text, size}) => {
  return (
    <span data-testid="title-component" className={`title-${size}`}>
        {text}
    </span>
  )
}

export default Title