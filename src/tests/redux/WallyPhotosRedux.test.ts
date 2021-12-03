import {
    reqPhoto,
    failurePhoto,
    getPhotosData, rootReducer
} from '../../redux/ducks/WaltyPhotos';

import { mockedStore } from '../__mocks__';

const store = {...mockedStore}

describe('redux test', () => {

    describe('getPhotosData() ', () => {

        it('should not change state', () => {
            const state = rootReducer(store, getPhotosData());
            expect(state).toStrictEqual(store);
        });

    });

    describe('reqPhoto', () => {

        it('should return sent_req', () => {
            expect(reqPhoto('tags')).toStrictEqual({
                type: 'SENT_REQ',
                payload: 'tags'
            });
        });
    });

    describe('error', () => {
        it('should return reqFailure', () => {
            expect(failurePhoto('error')).toStrictEqual({
                type: 'REQ_FAILURE',
                payload: 'error'
            });
        });
    });

    describe('success', () => {
        it('should return reqSuccess', () => {
            expect(failurePhoto('photos')).toStrictEqual({
                type: 'REQ_SUCCESS',
                payload: 'photo'
            });
        });
    });
});
