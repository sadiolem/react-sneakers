import apiHelper from './apiHelper';

export const getGoods = async () => apiHelper('get', 'goods');

export const addToFavorites = async () => apiHelper('put', 'goods');
