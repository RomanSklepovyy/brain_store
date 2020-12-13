import * as types from './productsActionTypes';

// export const getProductsByCategoryAction = (payload, startIndex) => {
//     return {type : types.GET_PRODUCTS_BY_CATEGORY_REQUEST, payload, startIndex};
// };
//
// export const getProductsBySearchQueryAction = (payload, startIndex) => {
//     return {type : types.GET_PRODUCTS_BY_SEARCH_QUERY_REQUEST, payload, startIndex};
// };
//
// export const addProductsBySearchQueryAction = (payload, startIndex) => {
//     return {type: types.ADD_PRODUCTS_BY_SEARCH_QUERY_REQUEST, payload, startIndex};
// };

export const getProductsByOptionsAction = (payload, startIndex) => {
    return {type : types.GET_PRODUCTS_BY_OPTIONS_REQUEST};
};

export const clearBooksAction = () => {
    return {type : types.CLEAR_BOOKS};
};

export const setProcessingFalse = () => {
    return {type: types.SET_PROCESSING_FALSE}
};

export const setProcessingTrue = () => {
    return {type: types.SET_PROCESSING_TRUE}
};
