import React from 'react'

const index = () => {
  return (
    <>
    Hero Banner
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>Speakers of many vairations</p>

    </div>

    <div  className="products-container">
      {['product 1','product 2'].map((product) => product)}
    </div>
    
    </>
    
    
  )
}

export default index