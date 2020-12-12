import {take, call, put, all} from 'redux-saga/effects';
import * as filterTypes from './filterActionsTypes';

function *watchOrderByChanged(action) {
    try {
        const result = yield call(getBooksByCategory, action.payload);
        yield put({type: filterTypes.GET_PRODUCTS_BY_CATEGORY_SUCCESS, categoryName : action.payload, result: result});
    } catch (e) {
        console.log(e);
    }
}

function *watchPrintTypeChanged(action) {
        yield take(filterTypes.UPDATE_EBOOK_TYPE);
        yield put({type: filterTypes.GET_PRODUCTS_BY_SEARCH_QUERY_SUCCESS, result: result});
}


export default watchAll;