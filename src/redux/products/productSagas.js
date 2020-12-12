import {takeLatest, call, put, all} from 'redux-saga/effects';
import * as types from './productsActionTypes';
import getBooksByCategory from '../../lib/booksByCategory';
import getBooksBySearchQuery from "../../lib/booksBySearchQuery";

function *getProductsByCategory(action) {
    try {
        const result = yield call(getBooksByCategory, action.payload);
        yield put({type: types.GET_PRODUCTS_BY_CATEGORY_SUCCESS, categoryName : action.payload, result: result});
    } catch (e) {
        console.log(e);
    }
}

function *getProductsBySearchQuery(action) {
    try {
        const result = yield call(getBooksBySearchQuery, action.payload);
        yield put({type: types.GET_PRODUCTS_BY_SEARCH_QUERY_SUCCESS, result: result});
    } catch (e) {
        console.log(e);
    }
}

function *watchAll() {
    yield all([
        yield takeLatest(types.GET_PRODUCTS_BY_CATEGORY_REQUEST, getProductsByCategory),
        yield takeLatest(types.GET_PRODUCTS_BY_SEARCH_QUERY_REQUEST, getProductsBySearchQuery)
    ]);
}

export default watchAll;