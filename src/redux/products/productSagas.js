import {takeLatest, call, put, all, select} from 'redux-saga/effects';
import * as types from './productsActionTypes';
import {getBooksByOptions} from "../../lib/getBooksByOptions";
import createApiOptionsHelper from "./helpers/createApiOptionsHelper";

function *getProducts() {
    try {
        const state = yield select();
        const result = yield call(getBooksByOptions, createApiOptionsHelper(state));
        yield put({type: types.GET_PRODUCTS_BY_OPTIONS_SUCCESS, result: result});
    } catch (e) {
        console.log(e);
        yield put({type: types.API_ERROR});
    }
}

function *watchAll() {
    yield all([
        yield takeLatest(types.GET_PRODUCTS_BY_OPTIONS_REQUEST, getProducts)
    ]);
}

export default watchAll;