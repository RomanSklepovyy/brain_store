import {takeLatest, put, all, select} from 'redux-saga/effects';
import * as types from './cartActionTypes';

function *addBook(action) {
    try {
        const state = yield select();

        const book = [ ...state.products.productsData.books, ...state.wanted.books].find(book => book.id === action.id);
        const bookInCart = state.cart.books.find(book => book.id === action.id);

        if (!book && !bookInCart) throw new Error('Book doesnt exist!');

        bookInCart ? yield put({type: types.CHANGE_BOOK_AMOUNT, amount: 1, id : bookInCart.id}) : yield put({type: types.ADD_BOOK_TO_CART_SUCCESS, book});
    } catch (e) {
        //console.log(e);
    }
}

function *watchAll() {
    yield all([
        yield takeLatest(types.ADD_BOOK_TO_CART_REQUEST, addBook)
    ]);
}

export default watchAll;