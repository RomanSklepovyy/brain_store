import productSagas from './products/productSagas';
import {all} from "redux-saga/effects";

export default function *rootSaga() {
    yield all([
        productSagas()
    ]);
}