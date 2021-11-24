import { createStore } from 'redux';
import pictureReducer from './ducks/duck.generator';



export const store = createStore(pictureReducer);