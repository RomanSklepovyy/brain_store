import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import rootReducer from "./rootReducer";

const initialSagaMiddleware = createSagaMiddleware();

const storeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ }) : compose;

let store = createStore(rootReducer, storeEnhancers(applyMiddleware(initialSagaMiddleware)));

window.store = store;

initialSagaMiddleware.run(rootSaga);

export default store;