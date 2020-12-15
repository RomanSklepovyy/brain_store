import * as types from './wantedActionTypes';

export const deleteBookFromWantedAction = (id) =>( {type: types.DELETE_BOOK_FROM_WANTED, id});

export const addBookToWantedAction = (id) => ({type: types.ADD_BOOK_TO_WANTED_REQUEST, id});

export const updateSearchWantedBooksOptions = () => ({type: types.UPDATE_SEARCH_WANTED_BOOKS_OPTIONS});

export const updateWantedSearchField = (payload) => ({type: types.UPDATE_WANTED_SEARCH_FIELD, payload});