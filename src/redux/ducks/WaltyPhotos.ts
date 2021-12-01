import axios from '../../api';
import { call, takeEvery, select, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

//ACTIONS TYPES
export const SENT_REQ = 'SENT_REQ';
export const REQ_FAILURE = 'REQ_FAILURE';
export const REQ_SUCCESS = 'REQ_SUCCESS';

interface PhotoAction {
    type: string,
    payload?: any;
}

// REDUCER
export interface tagsType {
    tags: string[]
}

export interface PhotoState {
    photos: string[],
    photo: string[],
    tags: string[],
    loading: boolean,
    searchLast: string[],
    error: null | string,
}

export const initialState: PhotoState = {
    photo: [],
    photos: [],
    tags: [],
    loading: false,
    searchLast: [],
    error: null,
};

export const rootReducer = (state: PhotoState = initialState, action: PhotoAction): PhotoState => {
    switch (action.type) {
        case SENT_REQ:
            let newSearch;
            if (state.searchLast.length === 3) {
                newSearch = [...state.searchLast, action.payload];
                newSearch.shift();
            } else {
                newSearch = [...state.searchLast, action.payload];
            }
            return {...state, loading: true, tags: action.payload, searchLast: newSearch};
        case REQ_FAILURE:
            return {...state, loading: false, error: action.payload};
        case REQ_SUCCESS:
            return {...state, loading: false, photos: [...action.payload]};
        default:
            return state;
    }
};

// ACTIONS CREATOR
export const reqPhoto = (tags: string[]) => ({
    type: SENT_REQ,
    payload: tags
});

export const failurePhoto = (error: null | string) => ({
    type: REQ_FAILURE,
    payload: error
});

export const reqPhotoSuccess = (photos: string) => ({
    type: REQ_SUCCESS,
    payload: photos
});

//ROOT SAGA
const getTags = (state: { rootReducer: { tags: tagsType; }; }) => state.rootReducer.tags;

export function* getPhotosData(): SagaIterator {
    const tags = yield select(getTags);
    let response = yield call(
        axios.get,
        `?key=24503228-963a8e7a1e1e9e6e353c6685d&q=${tags.join('+')}&image_type=photo&per_page`
    );
    if (response.status === 200) {
        yield put(reqPhotoSuccess(response.data.hits));
    } else {
        yield put(failurePhoto('error'));
    }
}

//SAGA WATCHERS
export function* photos() {
    yield takeEvery(SENT_REQ, getPhotosData);
}
