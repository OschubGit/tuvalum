import React from 'react'

const Logo = ({width, logo, alt}) => {
  return (
    <img width={width} src={logo} className="App-logo" alt={alt} />
  )
}

export default Logo