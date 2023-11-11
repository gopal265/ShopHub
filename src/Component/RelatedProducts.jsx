import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const RelatedProducts = () => {
    
    const {products,loading,status} = useSelector(state => state.products)
    const {product} = useSelector(state => state.product)
  return (
    <div className='relative top-[-180px]'>
        <div className='text-center text-[1.3rem] font-semibold pb-5 '> Related Products</div>
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-7'>
      {
        products && product && products.filter(prod => prod.category  === product.category).map(p =>(
            <div className='flex justify-center items-center'>
                <ProductCard product={p} />
                </div>
        ))
      }
      {
        product && !product.id && products && products.filter(prod => prod.category === products[0].category).map(p =>(
            <div className='flex justify-center items-center'>
                <ProductCard  product={p} />
                </div>
        ))
      }
    </div>
    </div>
  )
}

export default RelatedProducts
