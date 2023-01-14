import apiHelper from './apiHelper';

export const getGoods = async (params) => {
  const urlParams = new URLSearchParams(params);
  return apiHelper('GET', `goods?${urlParams}`);
};

export const updateGood = async (id, good) => apiHelper('PUT', `goods/${id}`, good);
