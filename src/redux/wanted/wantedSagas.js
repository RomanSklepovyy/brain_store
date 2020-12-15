import {takeLatest, call, put, all, select} from 'redux-saga/effects';
import * as types from './wantedActionTypes';

function *addBook(action) {
    try {
        const state = yield select();

        const book = [...state.products.productsData.books, ...state.cart.books].find(book => book.id === action.id);
        if (!book) throw new Error('Book doesnt exist!');

        state.wanted.books.find(book => book.id === action.id)
            ? yield put({type: types.DELETE_BOOK_FROM_WANTED, id: book.id})
            : yield put({type: types.ADD_BOOK_TO_WANTED_SUCCESS, book});


    } catch (e) {
        //console.log(e);
    }
}

function *watchAll() {
    yield all([
        yield takeLatest(types.ADD_BOOK_TO_WANTED_REQUEST, addBook)
    ]);
}

export default watchAll;