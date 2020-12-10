import * as types from './productsActionTypes';

const initialState = {
    products: {},
    processing: false
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS_BY_CATEGORY_SUCCESS: {
            return {
                ...state,
                products: action.result.items
                }
            }
        case types.GET_PRODUCTS_BY_SEARCH_QUERY_SUCCESS: {
            return {
                ...state,
                products: action.result.items
            }
        }
        default:
            return state;
    }
};

export default productReducer;