import axios from 'axios';

export const BASE_URL= 'https://pokeapi.co/api/v2/pokemon';
export const ID_API = `${ BASE_URL }/id`;

export const getPhotosData = async (id) => {
    const res = await axios.get(`${ BASE_URL }/${ id }`)
    return res;
}