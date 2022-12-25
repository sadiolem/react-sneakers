import { useEffect, useState } from 'react';
import styles from './CardsList.module.scss';
import Card from './Card';
import api from '../api';

function CardsList() {
  const [goods, setGoods] = useState([]);

  const fetchData = async () => {
    const data = await api.goods.getGoods();
    if (data) setGoods(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToFavorite = async (id) => {
    const updatedItem = goods.find((item) => item.id === id);
    updatedItem.isFavorite = !updatedItem.isFavorite;

    await api.goods.updateGood(updatedItem.id, updatedItem);

    const favoritesItem = {
      id: updatedItem.id,
      name: updatedItem.name,
      price: updatedItem.price,
      image: updatedItem.image,
    };

    // TODO fetch goods, favorites and cart item at app render
    // create global store to get id's for delete
    if (updatedItem.isFavorite) {
      await api.goods.addToFavorites(favoritesItem);
    } else {
      await api.goods.removeFromFavorites(favoritesItem.id);
    }
  };

  const handleAddToCart = async () => {
    // await api.goods.addToCart(item.id, item);
  };

  return (
    <div className={styles['cards-list']}>
      { goods.map((item) => (
        <Card
          key={item.id}
          item={item}
          onAddToFavorite={handleAddToFavorite}
          onAddToCart={handleAddToCart}
        />
      )) }
    </div>
  );
}

export default CardsList;
