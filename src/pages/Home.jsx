import { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import CardsList from '../components/CardsList';
import api from '../api/index';

function Home() {
  const [goods, setGoods] = useState([]);

  const fetchData = async () => {
    const data = await api.goods.getGoods();
    if (data) setGoods(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleItemUpdate = async (item) => {
    await api.goods.updateGood(item.id, item);
    fetchData();
  };

  return (
    <main className={styles.home}>
      <div>
        <h1 className={styles['home-title']}>Все кроссовки</h1>
      </div>
      <CardsList
        cards={goods}
        updateItem={handleItemUpdate}
      />
    </main>
  );
}

export default Home;
