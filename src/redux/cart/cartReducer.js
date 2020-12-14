import * as types from "./cartActionTypes";
import calculateFinalPriseHelper from "./calculateFinalPriseHelper";

const initialState = {
    books:[],
    finalPrice: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DELETE_BOOK_FROM_CART: {
            return {
                ...state,
                books: state.books.filter(book => action.id !== book.id)
            }
        }
        case types.CHANGE_BOOK_AMOUNT: {
            return {
                ...state,
                books: state.books.map(book => {
                    if (action.id === book.id) {
                        if (book.amount + action.amount >= 0 ) {
                            book.amount += action.amount;
                            return book;
                        } else {
                            book.amount = 0;
                            return book;
                        }
                    } else {
                        return book;
                    }
                })
            }
        }
        case types.ADD_BOOK_TO_CART_SUCCESS: {
            action.book.amount = 1;

            return {
                ...state,
                books: [...state.books, action.book],
            }
        }
        case types.CALCULATE_FINAL_PRICE: {
            return {
                ...state,
                finalPrice: calculateFinalPriseHelper(state.books)
            }
        }
        default:
            return state;
    }
};

export default cartReducer;