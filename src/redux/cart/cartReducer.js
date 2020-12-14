import * as types from "./cartActionTypes";

const initialState = {
    books:[]
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DELETE_BOOK_FROM_CART: {
            return {
                ...state,
                books: state.books.filter(book => action.id !== book.id)
            }
        }
        case types.CHANGE_BOOKS_AMOUNT: {
            return {
                ...state,
                books: state.books.map(book => action.id === book.id ? book.amount = action.amount : action)
            }
        }
        case types.ADD_BOOK_TO_CART_SUCCESS: {
            return {
                ...state,
                books: [...state.books, action.book]
            }
        }
        default:
            return state;
    }
};

export default cartReducer;