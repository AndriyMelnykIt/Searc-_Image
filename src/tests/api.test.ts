import { getPhotosData } from '../redux/ducks/WaltyPhotos';
import mock from './mock.json';

describe('api', () => {

    it('should check data is available', async () => {
        const data = await getPhotosData();
        expect(data).toStrictEqual(mock);
    });

});
