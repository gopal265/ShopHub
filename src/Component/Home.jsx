import React from 'react'
import NavBar from './NavBar'
import Overlay from './Overlay'
import ProductsContainer from './ProductsContainer'
import RelatedProducts from './RelatedProducts'
const Home = () => {
  return (
    <div>
      <div className='px-3 py-2'>
      <Overlay />
      </div>
      <ProductsContainer />
      <div className='pt-8'>
        <RelatedProducts />
      </div>
    </div>
  )
}

export default Home
