import {takeLatest, call, put, all, select} from 'redux-saga/effects';
import * as types from './productsActionTypes';
import getBooksByCategory from '../../lib/booksByCategory';
import getBooksBySearchQuery from "../../lib/booksBySearchQuery";
import {getBooksByOptions} from "../../lib/getBooksByOptions";

// function *getProductsByCategory(action) {
//     try {
//         const result = yield call(getBooksByCategory, action.payload, action.startIndex);
//         yield put({type: types.GET_PRODUCTS_BY_CATEGORY_SUCCESS, categoryName : action.payload, result: result});
//     } catch (e) {
//         console.log(e);
//     }
// }
//
// function *getProductsBySearchQuery(action) {
//     try {
//         const result = yield call(getBooksBySearchQuery, action.payload, action.startIndex);
//         yield put({type: types.GET_PRODUCTS_BY_SEARCH_QUERY_SUCCESS, result: result});
//     } catch (e) {
//         console.log(e);
//     }
// }
//
// function *addProductsBySearchQuery(action) {
//     try {
//         const result = yield call(getBooksBySearchQuery, action.payload, action.startIndex);
//         yield put({type: types.ADD_PRODUCTS_BY_SEARCH_QUERY_SUCCESS, result: result});
//     } catch (e) {
//         console.log(e);
//     }
// }

function *getProducts() {
    try {
        const state = yield select();
        const options = {
            fieldToSearchIn: state.header.fieldToSearchIn.replace(' ', '+'),
            searchQuery: state.header.searchField,
            startIndex: state.products.productsData.books.length,
            printType: state.filter.printType,
            orderBy: state.filter.orderBy,
            ebook: state.filter.ebookType
        };
        const result = yield call(getBooksByOptions, options);
        yield put({type: types.GET_PRODUCTS_BY_OPTIONS_SUCCESS, result: result});
    } catch (e) {
        console.log(e);
        yield put({type: types.API_ERROR});
    }
}

function *watchAll() {
    yield all([
        // yield takeLatest(types.GET_PRODUCTS_BY_CATEGORY_REQUEST, getProductsByCategory),
        // yield takeLatest(types.GET_PRODUCTS_BY_SEARCH_QUERY_REQUEST, getProductsBySearchQuery),
        // yield takeLatest(types.ADD_PRODUCTS_BY_SEARCH_QUERY_REQUEST, addProductsBySearchQuery),
        // yield takeLatest(types.GET_PRODUCTS_BY_OPTIONS_REQUEST, getProducts),
        yield takeLatest(types.GET_PRODUCTS_BY_OPTIONS_REQUEST, getProducts)
    ]);
}

export default watchAll;