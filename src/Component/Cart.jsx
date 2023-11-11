import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const Cart = () => {

    const { product } = useSelector(state => state.product)
    const [count, setCount] = useState(1)
    return (
        <div className='bg-card bg-size1 rounded-[2rem] min-h-fit  bg-color4 m-[0.5rem] shadow-shadow1 px-[20px] py-[30px] w-full'>
            {
                product && <> <div className='text-center'>Shopping Cart</div>
                    <div className='grid  md:grid-cols-8  grid-cols-4'>
                        <div className='shadow-shadow1  w-[5rem] h-[4rem] p-4'>
                            <img src={product.image}  className='w-full h-full'/>
                        </div>
                        <div className='flex justify-center items-center text-[1.2rem] md:col-span-3  col-span-3 p-4'>
                            {product.title}
                        </div>
                        <div className='flex  gap-4 md:col-span-3 justify-center items-center col-span-3 p-4'>
                            {
                                count === 1 && <div className='flex justify-center items-center'> <div className=' rounded-full flex justify-center items-center h-[40px] w-[40px] bg-color1 shadow-shadow4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>

                                </div>
                                </div>
                            }
                            {
                                count !== 1 && <div className='flex justify-center items-center'> <div className=' rounded-full flex justify-center items-center h-[40px] w-[40px] bg-color1 shadow-shadow4' onClick={() => setCount(count-1)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                    </svg>

                                </div>
                                </div>
                            }

                            <div className='flex justify-center items-center'>
                            <div className='flex justify-center items-center text-[20px] w-[50px] rounded-xl bg-color1 shadow-shadow4 h-[30px]'>
                                {count}
                            </div>
                            </div>
                           
                            <div className='flex justify-center items-center'>
                                <div className=' rounded-full flex justify-center items-center h-[40px] w-[40px] bg-color1 shadow-shadow4' onClick={()=>setCount(count+1)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                </div>

                            </div>
                        </div>
                        <div className='flex justify-center items-center text-[20px] p-4'>
                            ${Math.ceil(product.price * count)}
                        </div>

                    </div>
                    <hr className='py-4' />            
                    <div className='flex justify-center items-center text-[1.2rem] pb-3'>
                        <span className='font-bold'>Total:</span> <span>${Math.ceil(product.price*count)}</span>
                    </div>
                    <div className='flex justify-center items-center text-[1.2rem] pb-3'>
                        <span className='font-bold'>Shipping:</span><span>Free Shipping</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className='w-fit h-[3rem] text-[20px] text-color3 bg-[#000] rounded-3xl px-3'>Proceed to Check out</button>
                    </div>
                </>
            }

        </div>
    )
}

export default Cart
