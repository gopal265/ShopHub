import * as api from "../api/product"
import { FAIL_GET_PRODUCT, FAIL_GET_PRODUCTS, REQUEST_GET_PRODUCT, REQUEST_GET_PRODUCTS, SUCCESS_GET_PRODUCT, SUCCESS_GET_PRODUCTS } from "../constants/product"

export const getProducts = () => async(dispatch) =>{

    try {
        dispatch({type:REQUEST_GET_PRODUCTS})
        const {data} = await api.getProducts();
        dispatch({type:SUCCESS_GET_PRODUCTS,payload : data ,status:"success"})
    } catch (error) {
        dispatch({type:FAIL_GET_PRODUCTS,payload:"Unable to fetch Products",status:"error"})
    }
}

export const getProduct = (id) => async(dispatch) =>{
    try {
        dispatch({type:REQUEST_GET_PRODUCT})
        const {data} = await api.getProduct(id)
        dispatch({type:SUCCESS_GET_PRODUCT,payload:data,status:"success"})
    } catch (error) {
        dispatch({type:FAIL_GET_PRODUCT,payload:"Unable to fetch  Product",status:"error"})
    }
}