import axios from 'axios';

export const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPhotosData = async (id) => await axios.get(`${BASE_URL}/${id}`);
