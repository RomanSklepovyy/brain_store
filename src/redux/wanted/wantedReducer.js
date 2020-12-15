import * as types from "./wantedActionTypes";

const initialState = {
    books:[],
    searchQuery: '',
    searchOptions: []
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
        case types.UPDATE_SEARCH_WANTED_BOOKS_OPTIONS: {
            return {
                ...state,
                searchOptions: state.books.map(book => ({title: book.title, id: book.id}))
            }
        }
        case types.UPDATE_WANTED_SEARCH_FIELD: {
            return {
                ...state,
                searchQuery: action.payload
            }
        }
        default:
            return state;
    }
};

export default wantedReducer;