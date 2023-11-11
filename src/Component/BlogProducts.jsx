import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const BlogProducts = () => {

    const {products} = useSelector(state => state.products)
  return (
    <div className='pt-[6rem]'>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2'>
        {
            products.slice(0,4).map(product =>(
                <div className='flex justify-center items-center'>
                    <ProductCard product={product} />
                    </div>
            ))
        }
      </div>
    </div>
  )
}

export default BlogProducts
