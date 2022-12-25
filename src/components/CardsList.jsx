import { useCallback, useEffect, useState } from 'react';
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

  const handleAddToFavorite = useCallback(async (item) => {
    await api.goods.addToFavorites(item.id, item);
  }, [goods]);

  return (
    <div className={styles['cards-list']}>
      { goods.map((item) => (
        <Card
          key={item.id}
          item={item}
          onAddToFavorite={handleAddToFavorite}
        />
      )) }
    </div>
  );
}

export default CardsList;
