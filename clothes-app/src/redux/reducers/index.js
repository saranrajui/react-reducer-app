import { combineReducers } from 'redux';

import { productReducer, selectedProdutReducer } from "./productReducer"

export const reducers = combineReducers({
    allProducts: productReducer,
    thisProduct : selectedProdutReducer
})


export default reducers;