import React from 'react'

const Button = ({
  children,
  type,
  className = 'cButton cButton-primary',
  onClick,
  disabled,
  icon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {icon && icon}
      {children}
    </button>
  )
}

export default Button