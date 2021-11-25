import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { photos } from './ducks/ducksGeneration';
import reducer from './ducks/reducer';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
	reducer,
	reduxDevtools(applyMiddleware(...middleware))

);

sagaMiddleware.run(photos);

export default store;