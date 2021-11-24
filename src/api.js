import axios from 'axios';

export const BASE_URL = 'https://pixabay.com/api/';

export const getPhotosData = async (id) => await axios.get (`${BASE_URL}`);

