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
                products: {
                    ...state.products,
                    [action.categoryName] : action.result
                }
            }
        }
        default:
            return state;
    }
}

export default productReducer;