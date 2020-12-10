import * as types from './productsActionTypes';

export const getProductsCategoryAction = (payload) => {
    return {type : types.GET_PRODUCTS_BY_CATEGORY_REQUEST, payload};
}