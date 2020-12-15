import {takeLatest, call, put, all, select} from 'redux-saga/effects';
import * as types from './productsActionTypes';
import {getBooksByOptions} from "../../lib/getBooksByOptions";
import createApiOptionsHelper from "./helpers/createApiOptionsHelper";

function *getProducts() {
    try {
        yield put({type: types.SET_PROCESSING_TRUE});
        const state = yield select();
        const result = yield call(getBooksByOptions, createApiOptionsHelper(state));
        yield put({type: types.SET_PROCESSING_FALSE});
        yield put({type: types.GET_PRODUCTS_BY_OPTIONS_SUCCESS, result: result});
    } catch (e) {
        console.log(e);
        yield put({type: types.API_ERROR});
    }
}

function *getProduct(action) {
    try {
        const state = yield select();
        const book = [...state.products.productsData.books, ...state.cart.books, ...state.wanted.books].find(book => book.id === action.id);
        if (!book) throw new Error('Book doesnt exist!');
        yield put({type: types.GET_OPENED_PRODUCT_SUCCESS, book});
    } catch (e) {
        //console.log(e);
        yield put({type: types.API_ERROR});
    }
}

function *watchAll() {
    yield all([
        yield takeLatest(types.GET_PRODUCTS_BY_OPTIONS_REQUEST, getProducts),
        yield takeLatest(types.GET_OPENED_PRODUCT_REQUEST, getProduct)
    ]);
}

export default watchAll;