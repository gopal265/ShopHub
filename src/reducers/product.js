import { FAIL_GET_PRODUCT, FAIL_GET_PRODUCTS, REQUEST_GET_PRODUCT, REQUEST_GET_PRODUCTS, SUCCESS_GET_PRODUCT, SUCCESS_GET_PRODUCTS } from "../constants/product";


export const getProductsReducer = (state={products:[]},action) =>{

    switch(action.type){
        case REQUEST_GET_PRODUCTS:
            return {
                loading : true
            }
        case SUCCESS_GET_PRODUCTS :
            return {
                loading:false,
                products:action.payload,
                status:action.status
            }
        case FAIL_GET_PRODUCTS:
            return {
                loading:false,
                status:action.status,
                error : action.payload
            }
        default :
            return state;
    }
}

export const getProductReducer = (state={product:{}},action) =>{

    switch(action.type){
        case REQUEST_GET_PRODUCT:
            return {
                loading : true
            }
        case SUCCESS_GET_PRODUCT :
            return {
                loading:false,
                product:action.payload,
                status:action.status
            }
        case FAIL_GET_PRODUCT:
            return {
                loading:false,
                status:action.status,
                error : action.payload
            }
        default :
            return state;
    }
}