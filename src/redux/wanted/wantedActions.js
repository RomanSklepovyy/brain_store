import * as types from './wantedActionTypes';

export const deleteBookFromWantedAction = (id) =>( {type: types.DELETE_BOOK_FROM_WANTED, id});

export const addBookToWanted = (id) => ({type: types.ADD_BOOK_TO_WANTED_REQUEST, id});