import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'

import { client } from '../lib/client'
const index = ({Products, bannerData}) => {
  return (
    <>
    <HeroBanner heroBanner = {bannerData.length && bannerData[0]}/>
    {console.log(bannerData)}
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>Speakers of many vairations</p>

    </div>

    <div  className="products-container">
      {Products?.map((product) => <Product key={product._id} product={product}/>)}
    </div>

    <FooterBanner footerBanner={bannerData.length
     && bannerData[0]}/>
    
    </>
    
    
  )
}

export const getServerSideProps = async ()=>{
  const query = '*[_type == "product"]';
  const Products = await client.fetch(query);

  const bannerQuery = '*[_type =="banner"]';
  const bannerData = await client.fetch(bannerQuery)

  return {
    props:{Products, bannerData}
  }

}

export default index