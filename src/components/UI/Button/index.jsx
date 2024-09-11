import React from 'react'
import './index.scss'

const Button = ({title}) => {
  return (
    <button className="primary-btn">{title}</button>
  )
}

export default Button