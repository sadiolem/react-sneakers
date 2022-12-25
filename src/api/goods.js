import apiHelper from './apiHelper';

export const getGoods = async () => apiHelper('GET', 'goods');

export const addToFavorites = async (id, good) => apiHelper('PUT', `goods/${id}`, good);
