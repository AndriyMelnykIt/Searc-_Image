import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { photos } from './ducks/WaltyPhotos';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware ();
const middleware = [sagaMiddleware];

const WallyReducer = combineReducers ({
    rootReducer
});

export const store = createStore (
    WallyReducer,
    reduxDevtools (applyMiddleware (...middleware))
);

sagaMiddleware.run (photos);