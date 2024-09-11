import React from 'react'
import './index.scss'

const PageTitle = ({title}) => {
  return (
    <div className='page-title'>
        <span className='title-line'></span>
        <h2 className='title-name'>{title}</h2>
    </div>
  )
}

export default PageTitle