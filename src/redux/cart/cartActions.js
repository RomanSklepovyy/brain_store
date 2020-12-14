import * as types from './cartActionTypes';

export const deleteBookFromCartAction = (id) =>( {type: types.DELETE_BOOK_FROM_CART, id});

export const changeBooksAmountAction = (id, amount) => ({type: types.CHANGE_BOOKS_AMOUNT, id, amount});

export const addBookToCartAction = (id) => ({type: types.ADD_BOOK_TO_CART_REQUEST, id});