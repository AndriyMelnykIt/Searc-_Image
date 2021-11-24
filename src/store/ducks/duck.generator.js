// import { call, put, takeEvery } from 'redux-saga-effects';
// import { BASE_URL } from '../../api';

//types
export const GET_POKE_SUCCESS = 'GET_POKE_SUCCESS';


const dataInitial = {
	array: []
};

//ACTION TYPES


//REDUCER

export default function pictureReducer (state = dataInitial, action) {
	switch (action.type) {
	case GET_POKE_SUCCESS:
		return { ...state, array: action.payload };
	default:
		return state;
	}
}