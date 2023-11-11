import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
import { getProductReducer, getProductsReducer } from "../reducers/product";
import { loginReducer, singupReducer } from "../reducers/auth";

const reducer = combineReducers({
    products : getProductsReducer,
    product : getProductReducer,

    register : singupReducer,
    login : loginReducer
})

const intialState = {

}

const store = createStore(reducer,intialState,applyMiddleware(thunk));

export default store