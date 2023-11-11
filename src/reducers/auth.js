import { CLEAR_ERROR, FAIL_LOGIN, FAIL_REGISTER, REQUEST_LOGIN, REQUEST_REGISTER, SUCCESS_LOGIN, SUCCESS_REGISTER } from "../constants/auth";


export const singupReducer = (state={user:{}},action) =>{

    switch(action.type){

        case REQUEST_REGISTER :
            return {
                loading : true,
            }
        case SUCCESS_REGISTER :
            return {
                loading : false,
                user : action.payload,
                status : action.status
            }
        case FAIL_REGISTER :
            return {
                loading :  false,
                status : action.status
            }
        case CLEAR_ERROR :
            return {
                ...state,
                status : ""
            }
        default :
            return state;
    }
}


export const loginReducer = (state={user:{}},action) =>{

    switch(action.type){

        case REQUEST_LOGIN :
            return {
                loading : true,
            }
        case SUCCESS_LOGIN :
            return {
                loading : false,
                user : action.payload,
                status : action.status
            }
        case FAIL_LOGIN :
            return {
                loading :  false,
                status : action.status
            }
            case CLEAR_ERROR :
                return {
                    ...state,
                    status : ""
                }
        default :
            return state;
    }
}