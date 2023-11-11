import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Overlay from './Overlay'
import Details from './Details'
import RelatedProducts from './RelatedProducts'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../actions/product'
const ProductDetails = () => {
 
  const {product} = useSelector(state => state.product)
  const dispatch = useDispatch()
  useEffect(()=>{

    if(product && !product.id){
      dispatch(getProduct(1))
    }
    
  },[])
  return (
    <div className=''>
      <div className='px-3 py-2'>
      <Overlay />
      </div>
      <div className='px-12'>
        <Details  />
      </div>
      <div>
        <RelatedProducts></RelatedProducts>
      </div>
      <div className='grid grid-cols'>
        <div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetails
