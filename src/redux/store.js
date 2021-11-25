import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './ducks/reducer';

import { photos } from './ducks/ducksGeneration';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
	reducer,
	reduxDevtools(applyMiddleware(...middleware))

);

sagaMiddleware.run(photos);

export default store;