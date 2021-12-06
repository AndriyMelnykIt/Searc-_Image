import { runSaga } from '@redux-saga/core';

import {
    reqPhoto,
    failurePhoto,
    getPhotosData,
    rootReducer,
    reqPhotoSuccess, getTags, photos
} from '../../redux/ducks/WaltyPhotos';
import { mockedStore } from '../__mocks__';
import * as api from '../../api';
import instance from '../../api';

const store = {...mockedStore};

describe('redux test', () => {

    describe('getPhotosData() ', () => {

        it('should not change state', () => {
            const state = rootReducer(store, getPhotosData());
            expect(state).toStrictEqual(store);
        });

    });

    describe('setData() ', () => {
        it('should set data to store', () => {
            const state = rootReducer(store, photos(getPhotosData));
            const expectedState = {...store, data: getPhotosData()};
            expect(state).toStrictEqual(expectedState);
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
            expect(reqPhotoSuccess('photos')).toStrictEqual({
                type: 'REQ_SUCCESS',
                payload: 'photos'
            });
        });

    });

    describe('getTags', () => {

        it('should return object', () => {
            expect(getTags).toStrictEqual({
                type: 'tagsType'
            })
        });

    })

    describe('workerFetchData', () => {

        it('should return array of photos', async () => {
            const requestPhotos = jest.spyOn(api, instance)
                .mockImplementation(() => Promise.resolve(mockedStore));
            const dispatched: [] = [];

            await runSaga({
                dispatch: (action: never) => dispatched.push(action)
            }, getPhotosData);
        });
    })
    
});
