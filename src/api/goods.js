import apiHelper from './apiHelper';

export const getGoods = async () => apiHelper('GET', 'goods');

export const updateGood = async (id, good) => apiHelper('PUT', `goods/${id}`, good);

// TODO move to favorites endpoint file
export const getFavorites = async () => apiHelper('GET', 'favorites');

export const addToFavorites = async (good) => apiHelper('POST', 'favorites', good);

export const removeFromFavorites = async (id) => apiHelper('DELETE', `favorites/${id}`);
