import React from 'react'
import './index.scss'
import Button from '../../UI/Button'

const BannerSection = () => {
  return (
    <section className='banner-section'>
         <div className="container">
        <div className="top-block">
          <div className="block-content">
            <span className="date">03.08.25-ə qədər</span>
            <h4 className="headline">
            20%-Lorem ipsum dolor sit amet </h4>
            <p className="info">
                Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.
            </p>
            <Button title='166' />
          </div>
        </div>
       
      </div>
    </section>
  )
}

export default BannerSection