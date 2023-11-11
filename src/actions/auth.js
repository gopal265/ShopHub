import * as api from "../api/auth"
import { FAIL_LOGIN, FAIL_REGISTER, REQUEST_LOGIN, REQUEST_REGISTER, SUCCESS_LOGIN, SUCCESS_REGISTER } from "../constants/auth"

export  const  signup = (userData) => async(dispatch) =>{
    try {
        dispatch({type:REQUEST_REGISTER})
        const {data} =  await api.singup(userData)
        dispatch({type:SUCCESS_REGISTER,payload:data,status:"success"})
    } catch (error) {
        console.log(error)
        dispatch({type:FAIL_REGISTER,payload:"Unalbe to Register",status:"error"})
    }
}

export const login = (userData) => async(dispatch) =>{

    try {
        dispatch({type:REQUEST_LOGIN})
        const {data} = await api.login(userData)
        dispatch({type:SUCCESS_LOGIN,payload:data,status:"success"})
    } catch (error) {
        dispatch({type:FAIL_LOGIN,payload:"Unable to login",status:"error"})
    }
}