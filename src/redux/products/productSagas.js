import {takeLatest, call, put, all, fork} from 'redux-saga/effects';
import * as types from './productsActionTypes';
import getBooksByCategory from '../../lib/booksByCategory';
import {getProductsCategoryAction} from "./productsActions";
import {GET_PRODUCTS_BY_CATEGORY_SUCCESS} from "./productsActionTypes";

function *getProductsByCategory(action) {
    try {
        const result = yield call(getBooksByCategory, action.payload);
        yield put({type: GET_PRODUCTS_BY_CATEGORY_SUCCESS, categoryName : action.payload, result: result});
    } catch (e) {
        console.log(e);
    }
}

function *actionWatcher() {
    yield takeLatest(types.GET_PRODUCTS_BY_CATEGORY_REQUEST, getProductsByCategory);
}

export default actionWatcher;