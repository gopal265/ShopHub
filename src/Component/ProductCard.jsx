import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getProduct } from '../actions/product';

const ProductCard = ({product}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () =>{

        dispatch(getProduct(product.id))
        navigate("/shop")    
    }

    const handleCart = () =>{

        dispatch(getProduct(product.id))
        navigate("/cart")
    }
    return (
        <div className='w-[17rem] bg-card bg-size1 rounded-[2rem]  bg-color4 m-[0.5rem] shadow-shadow1'>
            <div className='w-[270px] h-[80px] py-[20px] px-[15px] flex justify-between align-center'>
                <div className=''>
                    <div className='w-[40px] h-[40px] rounded-full bg-color2 flex justify-center align-center' onClick={handleClick}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" width={18} data-icon="expand-arrows-alt" class="svg-inline--fa fa-expand-arrows-alt fa-w-14 fa-2x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z"></path></svg>
                    </div>
                </div>
                <div>
                    <div className='w-[40px] h-[40px] rounded-full bg-color2 flex justify-center align-center' onClick={handleCart}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" width={18} className="svg-inline--fa fa-shopping-bag fa-w-12  " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg>
                    </div>
                </div>

            </div>
            <div className='w-[270px] h-[215px] px-4 py-2'>
                <img src={product.image}  className='w-full h-full'/>
            </div>
            <div className='w-[270px] h-[43px] px-[15px] pb-[20px] text-center font-semibold text-[20px] text-color5 truncate text-ellipsis  '>
                {product.title}
            </div>
            <div className='w-[270px] h-[43px]  px-[15px] pb-[20px] text-center font-semibold text-[20px] text-color5'>
                {product.price} 
            </div>
        </div>
    )
}

export default ProductCard
