import axios from '../../api';
import { call, takeEvery, select, put } from 'redux-saga/effects';

//ACTIONS TYPES
export const SENT_REQ = 'SENT_REQ';
export const REQ_FAILURE = 'REQ_FAILURE';
export const REQ_SUCCESS = 'REQ_SUCCESS';

// REDUCER
export const initialState = {
    photos: [],
    tags: [],
    loading: false,
    searchLast: [],
    error: null
};

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
    case SENT_REQ:
        let newSearch;
        if (state.searchLast.length === 3) {
            newSearch = [...state.searchLast, action.payload];
            newSearch.shift ();
        } else {
            newSearch = [...state.searchLast, action.payload];
        }
        return { ...state, loading: true, tags: action.payload, searchLast: newSearch };
    case REQ_FAILURE:
        return { ...state, loading: false, error: action.payload };
    case REQ_SUCCESS:
        return { ...state, loading: false, photos: [...action.payload] };
    default:
        return state;
    }
}


// ACTIONS CREATOR
export const reqPhoto = tags => {
    return {
        type: SENT_REQ,
        payload: tags
    };
};

export const failurePhoto = error => {
    return {
        type: REQ_FAILURE,
        payload: error
    };
};

export const reqPhotoSuccess = photos => {
    return {
        type: REQ_SUCCESS,
        payload: photos
    };
};

//ROOT SAGA
const getTags = state => state.rootReducer.tags;

export function* getPhotosData () {
    const tags = yield select (getTags);
    let response = yield call (
        axios.get,
        `?key=24503228-963a8e7a1e1e9e6e353c6685d&q=${tags.join ('+')}&image_type=photo&per_page=42`
    );
    if (response.status === 200) {
        yield put (reqPhotoSuccess (response.data.hits));
    } else {
        yield put (failurePhoto ('error'));
    }
}

//SAGA WATCHERS
export function* photos () {
    yield takeEvery (SENT_REQ, getPhotosData);
}