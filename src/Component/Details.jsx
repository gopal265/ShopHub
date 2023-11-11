import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Size from './Size'
import {getProduct} from "../actions/product"
const Details = () => {

    const sizes = [41,42,43,44,45,46,47,48]
    const { product, loading } = useSelector(state => state.product)
    const {products} = useSelector(state => state.products)
    const dispatch = useDispatch();
   
    const filterProducts = product && products ? products.slice(product.id,product.id+3):[];

    return (

        <>
            {
                product && loading === false &&

                <div className='bg-card bg-size1 rounded-[2rem]  bg-color4 m-[0.5rem] shadow-shadow1 relative top-[-200px] p-[2rem]'>

                    <div className='grid grid-cols-3'>
                        <div className='lg:col-span-1 md:col-span-3  col-span-3'>

                            <div className='text-color5 font-semibold  text-[30px] '>
                                {product.title}
                            </div>
                            <div className="text-color6 font-weight1 text-[15px]  py-20">
                                {product.description}
                            </div>
                            <div className='flex lg:flex-col flex-col md:flex-row justify-center items-center'>
                                {
                                filterProducts.map(product => (
                                    <div className='w-[10rem] h-[10rem] p-5 ml-4'>
                                        <img src={product.image}  className='w-full h-full' onClick={()=> dispatch(getProduct(product.id))}/>
                                        </div>
                                ))
}
                            </div>

                        </div>

                        <div className='lg:col-span-2 md:col-span-3 col-span-3 grid   lg:grid-cols-1 '>

                            <div className='flex justify-center items-center'>
                                <div className='border-color8 flex flex-col bg-color7 border-inset border-2 w-[320px] h-[320px] rounded-full flex justify-center items-center'>
                                    <img src={product.image} className='w-[180px] h-[180px]  ' />
                                    <div className='pt-5 text-center font-semibold text-[20px] text-color5'>{product.price}</div>
                                </div>
                            </div>
                            <div className='pb-[0.7rem]'>
                                <p className='text-[1rem] font-bold'>Reviews</p>
                                <div className='flex gap-[1rem]'>
                                <p>⭐⭐⭐⭐</p>
                                <p className='text-[1rem] font-bold'>4/6(50)</p>
                                </div>
                            
                            </div>
                            <div className='pb-[0.7rem]'>
                                <p className='text-[1rem] font-bold'>Select Color</p>
                                <div>
                                    <label for="color0">
                                        <input type="radio" id="color0" name="color" value="#f0969e" className='shadow-[0 0 0 0.2rem #fa8907]' />
                                            <div className="shadow-" ></div>
                                            </label>
                                </div>
                            </div>
                            <div className='pb-[2rem]' >
                                <p className='text-[1rem] font-bold'>Select Size</p>
                                <div className='flex  flex-wrap'>
                                    {sizes.map(size =>(
                                        <div className='p-[10px]'>
                                        <Size size={size} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='flex justify-center items-center opacity-50'>
                                <button className='w-[12rem] h-[3rem] text-[20px] text-color3 bg-[#000] rounded-3xl'>Add to Cart</button>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default Details
