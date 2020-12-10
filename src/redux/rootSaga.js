import productSagas from './products/productSagas';
import headerSagas from './header/headerSagas';
import {all} from "redux-saga/effects";

export default function *rootSaga() {
    yield all([
        productSagas()
    ]);
}