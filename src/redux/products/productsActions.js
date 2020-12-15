import * as types from './productsActionTypes';

export const getProductsByOptionsAction = () => ({type : types.GET_PRODUCTS_BY_OPTIONS_REQUEST});

export const clearBooksAction = () => ({type : types.CLEAR_BOOKS});

export const setProcessingFalseAction = () => ({type: types.SET_PROCESSING_FALSE});

export const setProcessingTrueAction = () =>( {type: types.SET_PROCESSING_TRUE});

export const getOpenedProductAction = (id) =>( {type: types.GET_OPENED_PRODUCT_REQUEST, id});

