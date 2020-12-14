import productSagas from './products/productSagas';
import cartSagas from  './cart/cartSagas';
import wantedSagas from  './wanted/wantedSagas'
import {all} from "redux-saga/effects";

export default function *rootSaga() {
    yield all([
        productSagas(),
        cartSagas(),
        wantedSagas()
    ]);
}