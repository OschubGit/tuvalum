import React from 'react'

const Alerts = ({message, className}) => {
  return (
    <div className={className}>🚩{message}</div>
  )
}

export default Alerts