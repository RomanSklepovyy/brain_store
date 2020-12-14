import * as types from "./wantedActionTypes";

const initialState = {
    books:[]
};

const wantedReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DELETE_BOOK_FROM_WANTED: {
            return {
                ...state,
                books: state.books.filter(book => action.id !== book.id)
            }
        }
        case types.ADD_BOOK_TO_WANTED_SUCCESS: {
            return {
                ...state,
                books: [...state.books, action.book]
            }
        }
        default:
            return state;
    }
};

export default wantedReducer;