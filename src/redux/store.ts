import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { photos, rootReducer } from './ducks/WaltyPhotos';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const WallyReducer = combineReducers({
    rootReducer
});

export const store = createStore(
    WallyReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(photos);