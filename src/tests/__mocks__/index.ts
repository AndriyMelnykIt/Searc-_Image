import { PhotoState } from '../../redux/ducks/WaltyPhotos';

export const mockedData ={
    id: 1851246,
    pageURL: 'https://pixabay.com/photos/porsche-car-brake-lights-1851246/',
    type: 'photo',
    tags: 'porsche, car, brake lights',
}

export const mockedStore: PhotoState = {
    photo: [],
    photos: [],
    tags: [],
    loading: false,
    searchLast: [],
    error: null,
}
