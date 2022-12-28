import apiHelper from './apiHelper';

export const getGoods = async () => apiHelper('GET', 'goods');

export const updateGood = async (id, good) => apiHelper('PUT', `goods/${id}`, good);
