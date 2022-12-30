import { useState, useEffect } from 'react';
import api from '../api';
import styles from './Favorites.module.scss';
import CardsList from '../components/CardsList';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const fetchData = async () => {
    const data = await api.goods.getGoods();

    if (data) {
      const favoritesItems = data.filter((item) => item.isFavorite);
      setFavorites(favoritesItems);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleItemUpdate = async (item) => {
    await api.goods.updateGood(item.id, item);
    fetchData();
  };

  return (
    <main className={styles.favorites}>
      <h1 className={styles['favorites-title']}>Мои закладки</h1>
      <CardsList
        cards={favorites}
        updateItem={handleItemUpdate}
      />
    </main>
  );
}

export default Favorites;
