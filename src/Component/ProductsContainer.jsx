import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/product'
import ProductCard from './ProductCard'

const ProductsContainer = () => {

    const {loading,products,error,status} = useSelector(state => state.products)
    console.log(products)
    const dispatch = useDispatch()
    useEffect(() =>{

       dispatch(getProducts())
    },[])

  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 relative top-[-190px] pl-8 '>
      {
        loading === false && products &&   products.slice(0,4).map(product =>(
            <div className='flex justify-center items-center'>
                <ProductCard product={product} />
            </div>
        ))
      }
     
    </div>
  )
}

export default ProductsContainer
{

}