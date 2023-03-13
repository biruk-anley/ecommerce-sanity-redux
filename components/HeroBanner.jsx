import React from 'react'

import Link from 'next/link'
const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Small TExt</p>
        <h3>Mid text</h3>
        <img src="" alt="headphone" 
        className='hero-banner-image
        '
        />
        <div>
          <Link href="/product/ID">
            <button type="button">
                buy more
            </button>

          </Link>

          <div className="desc">
            <h5>Description</h5>
            <p>Description</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner