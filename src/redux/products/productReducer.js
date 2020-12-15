import * as types from './productsActionTypes';
import createBooksObjectData from "./helpers/createDataObjectHelper";

const initialState = {
    productsData: {
        books: [],
        availableBooks: 0
    },
    processing: false,
    openedBook: {}
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case types.GET_OPENED_PRODUCT_SUCCESS: {
            return {
                ...state,
                openedBook:  action.book
            }
        }
        default:
            return state;
    }
};




export default productReducer;