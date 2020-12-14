import * as types from './productsActionTypes';
import createBooksObjectData from "./helpers/createDataObjectHelper";

const initialState = {
    productsData: {
        books: [],
        availableBooks: 0
    },
    processing: false
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        // case types.GET_PRODUCTS_BY_CATEGORY_SUCCESS: {
        //     //console.log(action);
        //     return {
        //         ...state,
        //         productsData: createBooksObjectData(action.result.data)
        //         }
        //     }
        // case types.GET_PRODUCTS_BY_SEARCH_QUERY_SUCCESS: {
        //     //console.log(action);
        //     return {
        //         ...state,
        //         productsData: createBooksObjectData(action.result.data)
        //     }
        // }
        // case types.ADD_PRODUCTS_BY_SEARCH_QUERY_SUCCESS: {
        //     return {
        //         ...state,
        //         productsData: [...state.productsData, ...createBooksObjectData(action.result.data)]
        //     }
        // }
        case types.GET_PRODUCTS_BY_OPTIONS_SUCCESS: {
            console.log(action.result);
            return {
                ...state,
                productsData: {
                    books: [...state.productsData.books, ...createBooksObjectData(action.result.data).books],
                    availableBooks: action.result.data.totalItems// - state.productsData.books.length
                }
            }
        }
        case types.SET_PROCESSING_FALSE: {
            return {
                ...state,
                processing: false
            }
        }
        case types.SET_PROCESSING_TRUE: {
            return {
                ...state,
                processing: true
            }
        }
        case types.CLEAR_BOOKS: {
            return {
                ...state,
                productsData: {
                    books: [],
                    availableBooks: 0
                }
            }
        }
        default:
            return state;
    }
};




export default productReducer;