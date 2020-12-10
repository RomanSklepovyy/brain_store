import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import productReducer from './products/productReducer';
import productSagas from "./products/productSagas";

const initialSagaMiddleware = createSagaMiddleware();

const storeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ }) : compose;

let reducers = combineReducers({
    product: productReducer
});

let store = createStore(reducers, storeEnhancers(applyMiddleware(initialSagaMiddleware)));

window.store = store;

initialSagaMiddleware.run(rootSaga);

export default store;