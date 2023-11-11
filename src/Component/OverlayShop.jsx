import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SUCCESS_GET_PRODUCT } from '../constants/product'

const OverlayShop = () => {

    const  {products} = useSelector(state => state.products)
    const {product} = useSelector(state => state.product)
    const dispatch = useDispatch()
    const handlePrev = () =>{
        
        if(product && products && product.id === 1){
            return 
        }
        dispatch({type:SUCCESS_GET_PRODUCT,payload:products[product.id -2],status:"success"})
    }
    const handleNext = () =>{

        if(product && products && product.id === products.length ){
            return
        }
        dispatch({type:SUCCESS_GET_PRODUCT,payload:products[product.id],status:"success"})
    }
    return (
        <div className='w-full px-12 '>
            <div className='flex justify-around items-center grid grid-cols-2 sm:grid-cols-3 w-full'>
                {
                    screen.width > 640 &&  <div>
                    <span className='text-white'>Home</span>/Product Details
                </div>
                }
               
                <div className='flex justify-center items-center font-semibold text-[1.5rem]'>
                    Product Details
                </div>
                <div className='flex justify-end gap-2' >
                    <div className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center' onClick={handlePrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
                        </svg>

                    </div>
                    <div className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center' onClick={handleNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverlayShop
