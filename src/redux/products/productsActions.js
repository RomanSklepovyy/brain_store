import * as types from './productsActionTypes';

export const getProductsByOptionsAction = () => ({type : types.GET_PRODUCTS_BY_OPTIONS_REQUEST});

export const clearBooksAction = () => ({type : types.CLEAR_BOOKS});

export const setProcessingFalse = () => ({type: types.SET_PROCESSING_FALSE});

export const setProcessingTrue = () =>( {type: types.SET_PROCESSING_TRUE});

