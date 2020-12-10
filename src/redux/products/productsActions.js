import * as types from './productsActionTypes';

export const getProductsByCategoryAction = (payload) => {
    return {type : types.GET_PRODUCTS_BY_CATEGORY_REQUEST, payload};
};

export const getProductsBySearchQuery = (payload) => {
    return {type : types.GET_PRODUCTS_BY_SEARCH_QUERY_REQUEST, payload};
};